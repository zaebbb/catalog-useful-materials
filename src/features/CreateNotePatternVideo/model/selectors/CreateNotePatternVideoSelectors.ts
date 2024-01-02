import { type StateSchema } from '@app/providers/StoreProvider'
import { type CreateNotePatternVideoSchema } from '../types/CreateNotePatternVideoSchema'

export const getLinkVideoSelector = (
  state: StateSchema
): string => state.createNotePatternVideo?.values.linkVideo ?? ''

export const getIsLoadingSelector = (
  state: StateSchema
): boolean => state.createNotePatternVideo?.isLoading ?? false

export const getValidationSelector = (
  state: StateSchema
): CreateNotePatternVideoSchema['validation'] => state.createNotePatternVideo?.validation

export const getCreatedCodeSelector = (
  state: StateSchema
): string => state.createNotePatternVideo?.createdNoteCode ?? ''
