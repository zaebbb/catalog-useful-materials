import { type StateSchema } from '@app/providers/StoreProvider'
import { type NotePatternLayoutSchema } from '../types/NotePatternLayoutSchema'

export const getLinkLayoutSelector = (
  state: StateSchema
): string => state.notePatternLayout?.values.linkLayout ?? ''

export const getIsLoadingSelector = (
  state: StateSchema
): boolean => state.notePatternLayout?.isLoading ?? false

export const getValidationSelector = (
  state: StateSchema
): NotePatternLayoutSchema['validation'] => state.notePatternLayout?.validation

export const getSaveCodeSelector = (
  state: StateSchema
): string => state.notePatternLayout?.saveNoteCode ?? ''

export const getRemoteImageEditSelector = (
  state: StateSchema
): string => state.notePatternLayout?.editValues.imageLayout ?? ''
