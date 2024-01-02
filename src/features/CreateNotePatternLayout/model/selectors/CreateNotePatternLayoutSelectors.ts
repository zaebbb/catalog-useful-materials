import { type StateSchema } from '@app/providers/StoreProvider'
import { type CreateNotePatternLayoutSchema } from '../types/CreateNotePatternLayoutSchema'

export const getLinkLayoutSelector = (
  state: StateSchema
): string => state.createNotePatternLayout?.values.linkLayout ?? ''

export const getIsLoadingSelector = (
  state: StateSchema
): boolean => state.createNotePatternLayout?.isLoading ?? false

export const getValidationSelector = (
  state: StateSchema
): CreateNotePatternLayoutSchema['validation'] => state.createNotePatternLayout?.validation

export const getCreatedCodeSelector = (
  state: StateSchema
): string => state.createNotePatternLayout?.createdNoteCode ?? ''
