import { type StateSchema } from '@app/providers/StoreProvider'
import { type NotePatternVideoSchema } from '../types/NotePatternVideoSchema'

export const getLinkVideoSelector = (
  state: StateSchema
): string => state.notePatternVideo?.values.linkVideo ?? ''

export const getIsLoadingSelector = (
  state: StateSchema
): boolean => state.notePatternVideo?.isLoading ?? false

export const getValidationSelector = (
  state: StateSchema
): NotePatternVideoSchema['validation'] => state.notePatternVideo?.validation

export const getSaveCodeSelector = (
  state: StateSchema
): string => state.notePatternVideo?.saveNoteCode ?? ''
