import { type StateSchema } from '@app/providers/StoreProvider'
import { ACCESS_ADMIN, ACCESS_USER } from '@entities/User/lib/const/Access'
import { createSelector } from '@reduxjs/toolkit'
import { type UserBaseData, type UserData } from '../types/UserSchema'

export const getUserData =
  (state: StateSchema): UserData | undefined => state.user.user

export const getUserIsLoading =
  (state: StateSchema): boolean => state.user.isLoading

export const getUserInfo = createSelector(
  [getUserData],
  (state): UserBaseData => ({
    email: state?.email || '',
    username: state?.username || '',
    id: state?.id || 0,
    avatar: state?.avatar || '',
  })
)

export const getUserAccesses = createSelector(
  [getUserData],
  (state) => ([...state?.accesses ?? []])
)

export const getUserIsMounted =
  (state: StateSchema): boolean => state.user._mounted

export const accessIsAdmin = createSelector(
  getUserAccesses,
  (accesses): boolean =>
    Boolean(accesses
      .filter(access =>
        access.code === ACCESS_ADMIN
      ).length
    )
)

export const accessIsUser = createSelector(
  getUserAccesses,
  (accesses): boolean =>
    Boolean(accesses
      .filter(access =>
        access.code === ACCESS_USER
      ).length
    )
)
