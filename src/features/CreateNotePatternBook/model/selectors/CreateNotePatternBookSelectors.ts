import { type StateSchema } from '@app/providers/StoreProvider'
import { type CreateNotePatternBookSchema } from '../types/CreateNotePatternBookSchema'

export const getLinkBookSelector = (
  state: StateSchema
): string => state.createNotePatternBook?.values.linkBook ?? ''

export const getIsLinkViewSelector = (
  state: StateSchema
): boolean => state.createNotePatternBook?.values.isLinkView ?? false

export const getIsFileViewSelector = (
  state: StateSchema
): boolean => state.createNotePatternBook?.values.isFileView ?? false

export const getIsLoadingSelector = (
  state: StateSchema
): boolean => state.createNotePatternBook?.isLoading ?? false

export const getValidationSelector = (
  state: StateSchema
): CreateNotePatternBookSchema['validation'] => state.createNotePatternBook?.validation

export const getCreatedCodeSelector = (
  state: StateSchema
): string => state.createNotePatternBook?.createdNoteCode ?? ''
