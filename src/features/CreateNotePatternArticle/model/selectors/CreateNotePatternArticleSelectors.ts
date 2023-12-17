import { type StateSchema } from '@app/providers/StoreProvider'
import { type CreateNotePatternArticleSchema } from '../types/CreateNotePatternArticleSchema'

export const getLinkNoteSelector = (
  state: StateSchema
): string => state.createNotePatternArticle?.values.linkNote ?? ''

export const getLinkVideoSelector = (
  state: StateSchema
): string => state.createNotePatternArticle?.values.linkVideo ?? ''

export const getIsImageParseSelector = (
  state: StateSchema
): boolean => state.createNotePatternArticle?.values.isImageParse ?? false

export const getIsLoadingSelector = (
  state: StateSchema
): boolean => state.createNotePatternArticle?.isLoading ?? false

export const getValidationSelector = (
  state: StateSchema
): CreateNotePatternArticleSchema['validation'] => state.createNotePatternArticle?.validation

export const getCreatedCodeSelector = (
  state: StateSchema
): string => state.createNotePatternArticle?.createdNoteCode ?? ''
