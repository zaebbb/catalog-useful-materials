import { rtkApi } from '@api/rtkApi'
import {
  type NotesTypesListResponse,
} from '../model/types/NotesTypesListSchema'

const notesTypesListApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotesTypesList: build.query<NotesTypesListResponse, void>({
      query: () => ({
        url: '/note-type/all',
      }),
    }),
  }),
})

export const useNotesTypesList = notesTypesListApi.useGetNotesTypesListQuery
