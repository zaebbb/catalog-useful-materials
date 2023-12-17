import { type StateSchema } from '@app/providers/StoreProvider'
import { type CreateNotePatternIssueSchema } from '../types/CreateNotePatternIssueSchema'

export const getLinkIssueSelector = (
  state: StateSchema
): string => state.createNotePatternIssue?.values.linkIssue ?? ''

export const getIsLinkViewSelector = (
  state: StateSchema
): boolean => state.createNotePatternIssue?.values.isLinkView ?? false

export const getIsImageViewSelector = (
  state: StateSchema
): boolean => state.createNotePatternIssue?.values.isImageView ?? false

export const getIsLoadingSelector = (
  state: StateSchema
): boolean => state.createNotePatternIssue?.isLoading ?? false

export const getValidationSelector = (
  state: StateSchema
): CreateNotePatternIssueSchema['validation'] => state.createNotePatternIssue?.validation

export const getCreatedCodeSelector = (
  state: StateSchema
): string => state.createNotePatternIssue?.createdNoteCode ?? ''
