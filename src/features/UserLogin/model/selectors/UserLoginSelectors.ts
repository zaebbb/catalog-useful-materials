import { type StateSchema } from '@app/providers/StoreProvider'
import { createSelector } from '@reduxjs/toolkit'
import { type UserLoginSchema, type UserLoginValidation } from '../types/UserLoginSchema'

export const getUserLogin = (state: StateSchema): UserLoginSchema | undefined => state.userLoginForm

export const getEmailSelector =
  (state: StateSchema): string => state.userLoginForm?.email ?? ''

export const getPasswordSelector =
  (state: StateSchema): string => state.userLoginForm?.password ?? ''

export const getValidationSelector = createSelector(
  [getUserLogin],
  (state): UserLoginValidation => state?.validation ?? {}
)

export const getIsLoadingSelector =
  (state: StateSchema): boolean => state.userLoginForm?.isLoading ?? false
