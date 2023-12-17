import { type BaseResponse } from '@api/axiosApi'
import { type UserResponseData } from '@entities/User'
import { type AuthData } from '@integrations/google-auth'

export type AuthMode = 'login' | 'register'

export interface GoogleAuthToken {
  token: string
}

export type GoogleAuthGetTokenResponse = BaseResponse<GoogleAuthToken, any>

export interface GoogleAuthSchema {
  user?: AuthData
  mode: AuthMode
  token: string
  isLoading: boolean
  auth: boolean
}

export interface GoogleAuthSave {
  user: AuthData
  mode: AuthMode
}

export interface SaveGoogleAuthCheck {
  auth: boolean
}

export type SaveGoogleResponse = BaseResponse<UserResponseData & SaveGoogleAuthCheck, any>
