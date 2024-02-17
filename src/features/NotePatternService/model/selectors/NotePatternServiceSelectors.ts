import { type StateSchema } from '@app/providers/StoreProvider'
import { type NotePatternServiceSchema } from '../types/NotePatternServiceSchema'

export const getLinkServiceSelector = (
  state: StateSchema
): string => state.notePatternService?.values.linkService ?? ''

export const getIsLoadingSelector = (
  state: StateSchema
): boolean => state.notePatternService?.isLoading ?? false

export const getValidationSelector = (
  state: StateSchema
): NotePatternServiceSchema['validation'] => state.notePatternService?.validation

export const getSaveCodeSelector = (
  state: StateSchema
): string => state.notePatternService?.saveNoteCode ?? ''
