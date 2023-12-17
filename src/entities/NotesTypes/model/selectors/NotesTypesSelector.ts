import { type StateSchema } from '@app/providers/StoreProvider'
import { type NotesTypesSchema } from '../types/NotesTypesSchema'

export const getRemotePathSelector =
  (state: StateSchema): string => state.notesTypes?.allNotesTypesPath ?? ''

export const getCurrentElementSelector = (
  state: StateSchema
): NotesTypesSchema['currentNoteType'] => state.notesTypes?.currentNoteType

export const getIsLoadingSelector = (
  state: StateSchema
): boolean => state.notesTypes?.isLoading ?? false

export const getValidationSelector = (
  state: StateSchema
): string => state.notesTypes?.validation ?? ''
