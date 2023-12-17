import { type BaseResponse } from '@api/axiosApi'
import { type UserData } from '@entities/User'

export interface UserLoginRequestData {
  email: string
  password: string
}

export interface UserLoginSchema {
  email: string
  password: string
  isLoading: boolean
  validation?: UserLoginValidation
}

export interface UserLoginSuccess extends UserData {}

export interface UserLoginValidation {
  email?: string
  password?: string
  auth?: string
}

export type UserLoginResponse =
  BaseResponse<UserLoginSuccess, UserLoginValidation>
