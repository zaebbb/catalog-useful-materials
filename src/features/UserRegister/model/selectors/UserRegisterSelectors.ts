import { type StateSchema } from '@app/providers/StoreProvider'
import { createSelector } from '@reduxjs/toolkit'
import { type UserRegisterSchema, type UserRegisterRequestData } from '../types/UserRegisterSchema'

export const getUserRegisterValues = (
  state: StateSchema
): UserRegisterRequestData | undefined => state.userRegister?.values

export const getRegisterEmailSelector = createSelector(
  [getUserRegisterValues],
  (state): string => state?.email ?? ''
)

export const getRegisterUsernameSelector = createSelector(
  [getUserRegisterValues],
  (state): string => state?.username ?? ''
)

export const getRegisterPasswordSelector = createSelector(
  [getUserRegisterValues],
  (state): string => state?.password ?? ''
)

export const getRegisterRepeatPasswordSelector = createSelector(
  [getUserRegisterValues],
  (state): string => state?.repeatPassword ?? ''
)

export const getRegisterUserConsentSelector = createSelector(
  [getUserRegisterValues],
  (state): boolean => state?.userConsent ?? false
)

export const getUserRegisterIsLoading = (
  state: StateSchema
): boolean => state.userRegister?.isLoading ?? false

export const getUserRegisterValidation = (
  state: StateSchema
): UserRegisterSchema['validation'] => state.userRegister?.validation
