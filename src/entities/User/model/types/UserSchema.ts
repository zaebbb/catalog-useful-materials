import { type BaseResponse } from '@api/axiosApi'

export interface UserProfile {
  avatar?: string
  name?: string
  surname?: string
  patronymic?: string
  accGoogle?: boolean
  accGithub?: string
}

export interface UserBaseData {
  id: number
  username: string
  email: string
  avatar?: string
}

export interface Access {
  name: string
  code: string
}

export interface UserData extends UserBaseData {
  userData?: UserProfile
  accesses?: Access[]
}

export interface UserSchema {
  user?: UserData
  _mounted: boolean
  isLoading: boolean
}

export type UserResponseData = Omit<UserSchema, '_mounted' | 'isLoading'>

export type UserCheckResponse = BaseResponse<UserResponseData, any>
