import { type StateSchema } from '@app/providers/StoreProvider'
import { type CreateTag, type CreateTagSchema } from '../types/CreateTagSchema'

export const getCreateTagValuesSelector = (
  state: StateSchema
): CreateTag | undefined => state.createTag?.values

export const getCreateTagValidationSelector = (
  state: StateSchema
): CreateTagSchema['validation'] => state.createTag?.validation

export const getCreateTagIsLoadingSelector = (
  state: StateSchema
): boolean => state.createTag?.isLoading ?? false

export const getCreateTagIsCreatedSelector = (
  state: StateSchema
): boolean => state.createTag?.isCreated ?? false
