import { type StateSchema } from '@app/providers/StoreProvider'
import { type CreateCategory, type CreateCategorySchema } from '../types/CreateCategorySchema'

export const getCreateCategoryValuesSelector = (
  state: StateSchema
): CreateCategory | undefined => state.createCategory?.values

export const getCreateCategoryValidationSelector = (
  state: StateSchema
): CreateCategorySchema['validation'] => state.createCategory?.validation

export const getCreateCategoryIsLoadingSelector = (
  state: StateSchema
): boolean => state.createCategory?.isLoading ?? false

export const getCreateCategoryIsCreatedSelector = (
  state: StateSchema
): boolean => state.createCategory?.isCreated ?? false
