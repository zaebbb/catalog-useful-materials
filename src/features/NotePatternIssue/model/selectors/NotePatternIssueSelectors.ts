import { type StateSchema } from '@app/providers/StoreProvider'
import { type NotePatternIssueSchema } from '../types/NotePatternIssueSchema'

export const getLinkIssueSelector = (
  state: StateSchema
): string => state.notePatternIssue?.values.linkIssue ?? ''

export const getIsLinkViewSelector = (
  state: StateSchema
): boolean => state.notePatternIssue?.values.isLinkView ?? false

export const getIsImageViewSelector = (
  state: StateSchema
): boolean => state.notePatternIssue?.values.isImageView ?? false

export const getIsLoadingSelector = (
  state: StateSchema
): boolean => state.notePatternIssue?.isLoading ?? false

export const getValidationSelector = (
  state: StateSchema
): NotePatternIssueSchema['validation'] => state.notePatternIssue?.validation

export const getSaveCodeSelector = (
  state: StateSchema
): string => state.notePatternIssue?.saveNoteCode ?? ''

export const getRemoteFileIssueEditSelector = (
  state: StateSchema
): string => state.notePatternIssue?.editValues.fileImage ?? ''
