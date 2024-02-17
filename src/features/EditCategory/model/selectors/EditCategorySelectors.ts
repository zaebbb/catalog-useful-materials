import { type StateSchema } from '@app/providers/StoreProvider'
import { type EditCategory, type EditCategorySchema } from '../types/EditCategorySchema'

export const getEditCategoryValuesSelector = (
  state: StateSchema
): EditCategory | undefined => state.editCategory?.values

export const getEditCategoryValidationSelector = (
  state: StateSchema
): EditCategorySchema['validation'] => state.editCategory?.validation

export const getEditCategoryIsLoadingSelector = (
  state: StateSchema
): boolean => state.editCategory?.isLoading ?? false

export const getEditCategoryIsUpdatedSelector = (
  state: StateSchema
): boolean => state.editCategory?.isUpdated ?? false
