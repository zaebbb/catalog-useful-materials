import { type StateSchema } from '@app/providers/StoreProvider'
import { type NotePatternArticleSchema } from '../types/NotePatternArticleSchema'

export const getLinkNoteSelector = (
  state: StateSchema
): string => state.notePatternArticle?.values.linkNote ?? ''

export const getLinkVideoSelector = (
  state: StateSchema
): string => state.notePatternArticle?.values.linkVideo ?? ''

export const getIsImageParseSelector = (
  state: StateSchema
): boolean => state.notePatternArticle?.values.isImageParse ?? false

export const getIsLoadingSelector = (
  state: StateSchema
): boolean => state.notePatternArticle?.isLoading ?? false

export const getValidationSelector = (
  state: StateSchema
): NotePatternArticleSchema['validation'] => state.notePatternArticle?.validation

export const getSaveCodeSelector = (
  state: StateSchema
): string => state.notePatternArticle?.saveNoteCode ?? ''

export const getRemoteImageEditSelector = (
  state: StateSchema
): string => state.notePatternArticle?.editValues.image ?? ''
