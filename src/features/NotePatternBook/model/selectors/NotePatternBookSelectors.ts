import { type StateSchema } from '@app/providers/StoreProvider'
import { type NotePatternBookSchema } from '../types/NotePatternBookSchema'

export const getLinkBookSelector = (
  state: StateSchema
): string => state.notePatternBook?.values.linkBook ?? ''

export const getIsLinkViewSelector = (
  state: StateSchema
): boolean => state.notePatternBook?.values.isLinkView ?? false

export const getIsFileViewSelector = (
  state: StateSchema
): boolean => state.notePatternBook?.values.isFileView ?? false

export const getIsLoadingSelector = (
  state: StateSchema
): boolean => state.notePatternBook?.isLoading ?? false

export const getValidationSelector = (
  state: StateSchema
): NotePatternBookSchema['validation'] => state.notePatternBook?.validation

export const getSaveCodeSelector = (
  state: StateSchema
): string => state.notePatternBook?.saveNoteCode ?? ''

export const getRemoteFileBookEditSelector = (
  state: StateSchema
): string => state.notePatternBook?.editValues.fileBook ?? ''
