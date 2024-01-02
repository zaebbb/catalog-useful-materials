import { type StateSchema } from '@app/providers/StoreProvider'
import { type CreateNotePatternServiceSchema } from '../types/CreateNotePatternServiceSchema'

export const getLinkServiceSelector = (
  state: StateSchema
): string => state.createNotePatternService?.values.linkService ?? ''

export const getIsLoadingSelector = (
  state: StateSchema
): boolean => state.createNotePatternService?.isLoading ?? false

export const getValidationSelector = (
  state: StateSchema
): CreateNotePatternServiceSchema['validation'] => state.createNotePatternService?.validation

export const getCreatedCodeSelector = (
  state: StateSchema
): string => state.createNotePatternService?.createdNoteCode ?? ''
