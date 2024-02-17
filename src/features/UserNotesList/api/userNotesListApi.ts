import { rtkApi } from '@api/rtkApi'
import {
  type UserNoteListRequestOptions,
  type UserNoteListResponse,
} from '../model/types/NotesListSchema'

const userNotesListApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUserNotesList: build.query<UserNoteListResponse, UserNoteListRequestOptions>({
      query: (options: UserNoteListRequestOptions) => ({
        url: '/notes/notes-details/user',
        method: 'POST',
        params: options,
      }),
      merge: (
        currentCache,
        newItems,
        {
          arg,
        }
      ) => {
        if (
          arg &&
          arg.page === 0
        ) {
          currentCache.success = newItems.success
          return
        }

        if (currentCache.success && newItems.success) {
          newItems.success.forEach((newItem) => {
            if (currentCache.success) {
              const isExist = currentCache.success.some(
                (cacheItem) => cacheItem.id === newItem.id
              )

              if (!isExist) {
                currentCache.success.push(newItem)
              }
            }
          })
        }
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg !== previousArg
      },
    }),
  }),
})

export const useUserNotesList = userNotesListApi.useGetUserNotesListQuery
