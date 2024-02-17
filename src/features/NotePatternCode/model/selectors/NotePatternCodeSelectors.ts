import { type StateSchema } from '@app/providers/StoreProvider'
import { type NotePatternCodeSchema } from '../types/NotePatternCodeSchema'

export const getCodeSelector = (
  state: StateSchema
): string => state.notePatternCode?.values.code ?? ''

export const getIsLoadingSelector = (
  state: StateSchema
): boolean => state.notePatternCode?.isLoading ?? false

export const getValidationSelector = (
  state: StateSchema
): NotePatternCodeSchema['validation'] => state.notePatternCode?.validation

export const getSaveCodeSelector = (
  state: StateSchema
): string => state.notePatternCode?.saveNoteCode ?? ''
