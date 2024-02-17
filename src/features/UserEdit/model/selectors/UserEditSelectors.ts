import { type StateSchema } from '@app/providers/StoreProvider'
import { type UserEditSchema } from '@features/UserEdit'

export const getUserEditValuesSelector = (
  state: StateSchema
): UserEditSchema['values'] => state.userEdit?.values

export const getUserEditIsLoadingSelector = (
  state: StateSchema
): boolean => state.userEdit?.isLoading ?? false

export const getUserEditIsSaveSelector = (
  state: StateSchema
): boolean => state.userEdit?.isSave ?? false

export const getUserEditValidationSelector = (
  state: StateSchema
): UserEditSchema['validation'] => state.userEdit?.validation
