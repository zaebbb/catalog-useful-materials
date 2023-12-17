import { type StateSchema } from '@app/providers/StoreProvider'
import { ACCESS_ADMIN } from '@entities/User'
import { type NoteDetailsSchema } from '../types/NotesDetailsSchema'

export const getIsLoadingSelector =
  (state: StateSchema): boolean => state.noteDetails?.isLoading ?? true

export const getNoteDetailsSelector =
  (state: StateSchema): NoteDetailsSchema['note'] => state.noteDetails?.note

export const isCanEditNote = (state: StateSchema): boolean => {
  if (state.noteDetails?.note?.user.id === state.user.user?.id) {
    return true
  }

  if (state.user.user?.accesses?.find(access => access.code === ACCESS_ADMIN)) {
    return true
  }

  return false
}
