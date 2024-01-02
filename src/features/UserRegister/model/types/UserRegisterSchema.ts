import { type BaseResponse } from '@api/axiosApi'
import { type UserData } from '@entities/User'

export interface UserRegisterRequestData {
  username: string
  email: string
  password: string
  repeatPassword: string
  userConsent: boolean
}

export interface UserRegisterValidation {
  username?: string
  email?: string
  password?: string
  repeatPassword?: string
  userConsent?: string
}

export interface UserRegisterSchema {
  values: UserRegisterRequestData
  isLoading: boolean
  validation?: UserRegisterValidation
}

export interface UserRegisterSuccess extends UserData {}

export type UserRegisterResponse = BaseResponse<UserRegisterSuccess, UserRegisterValidation>
