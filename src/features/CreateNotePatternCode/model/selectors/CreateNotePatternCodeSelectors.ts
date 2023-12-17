import { type StateSchema } from '@app/providers/StoreProvider'
import { type CreateNotePatternCodeSchema } from '../types/CreateNotePatternCodeSchema'

export const getCodeSelector = (
  state: StateSchema
): string => state.createNotePatternCode?.values.code ?? ''

export const getIsLoadingSelector = (
  state: StateSchema
): boolean => state.createNotePatternCode?.isLoading ?? false

export const getValidationSelector = (
  state: StateSchema
): CreateNotePatternCodeSchema['validation'] => state.createNotePatternCode?.validation

export const getCreatedCodeSelector = (
  state: StateSchema
): string => state.createNotePatternCode?.createdNoteCode ?? ''
