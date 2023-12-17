import { type StateSchema } from '@app/providers/StoreProvider'
import { type UserProfile } from '@entities/User'
import { createSelector } from '@reduxjs/toolkit'
import { type ProfileSchema, type ProfileValidation } from '../types/ProfileSchema'

export const getProfileSchema =
  (state: StateSchema): ProfileSchema | undefined => state.profileEdit

export const getProfileEditIsLoading =
  (state: StateSchema): boolean => state.profileEdit?.isLoading ?? false

export const getProfileEditMounted =
  (state: StateSchema): boolean => state.profileEdit?._mounted ?? false

export const getProfileEditValidation = createSelector(
  [getProfileSchema],
  (state): ProfileValidation => state?.validation ?? {}
)

export const getProfileEditUserData = createSelector(
  [getProfileSchema],
  (state): UserProfile => state?.user ?? {}
)
