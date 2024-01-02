import { rtkApi } from '@api/rtkApi'
import { type UserNoteListResponse } from '../model/types/NotesListSchema'

const userNotesListApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUserNotesList: build.query<UserNoteListResponse, void>({
      query: () => ({
        url: '/notes/notes-details/user',
      }),
    }),
  }),
})

export const useUserNotesList = userNotesListApi.useGetUserNotesListQuery
