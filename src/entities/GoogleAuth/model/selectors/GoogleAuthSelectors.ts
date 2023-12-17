import { type StateSchema } from '@app/providers/StoreProvider'
import { type AuthData } from '@integrations/google-auth'
import { type AuthMode } from '../types/GoogleAuthTypes'

export const getGoogleAuthTokenSelector =
  (state: StateSchema): string => state.googleAuth?.token ?? ''

export const getGoogleAuthIsLoadingSelector =
  (state: StateSchema): boolean => state.googleAuth?.isLoading ?? false

export const getGoogleAuthModeSelector =
  (state: StateSchema): AuthMode => state.googleAuth?.mode ?? 'login'

export const getGoogleAuthUserSelector =
  (state: StateSchema): AuthData | undefined => state.googleAuth?.user

export const getGoogleIsAuth =
  (state: StateSchema): boolean => state.googleAuth?.auth ?? false
