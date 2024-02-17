import { type StateSchema } from '@app/providers/StoreProvider'
import { type EditTag, type EditTagSchema } from '../types/EditTagSchema'

export const getEditTagValuesSelector = (
  state: StateSchema
): EditTag | undefined => state.editTag?.values

export const getEditTagValidationSelector = (
  state: StateSchema
): EditTagSchema['validation'] => state.editTag?.validation

export const getEditTagIsLoadingSelector = (
  state: StateSchema
): boolean => state.editTag?.isLoading ?? false

export const getEditTagIsUpdatedSelector = (
  state: StateSchema
): boolean => state.editTag?.isUpdated ?? false
