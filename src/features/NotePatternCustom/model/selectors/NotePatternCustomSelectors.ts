import { type StateSchema } from '@app/providers/StoreProvider'
import { type NotePatternCustomSchema } from '../types/NotePatternCustomSchema'

export const getNoteCustomFieldsSelector = (
  state: StateSchema
): NotePatternCustomSchema['fields'] => state.notePatternCustom?.fields ?? []

export const getNoteCustomValidationSelector = (
  state: StateSchema
): NotePatternCustomSchema['validation'] => state.notePatternCustom?.validation

export const getIsLoadingSelector = (
  state: StateSchema
): boolean => state.notePatternCustom?.isLoading ?? false

export const getIsMountedFieldsSelector = (
  state: StateSchema
): boolean => state.notePatternCustom?.isMountedFields ?? false

export const getSaveCodeSelector = (
  state: StateSchema
): string => state.notePatternCustom?.saveNoteCode ?? ''
