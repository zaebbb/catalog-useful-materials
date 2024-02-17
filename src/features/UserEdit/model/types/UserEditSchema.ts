import { type BaseResponse } from '@api/axiosApi'

export interface UserEditValues {
  id: number
  email: string
  username: string
  isAdmin: boolean
  isUser: boolean
}

export type UserEditValuesValidation = Partial<Record<keyof UserEditValues, string>>

export interface UserEditSchema {
  values?: UserEditValues
  validation?: UserEditValuesValidation
  isLoading: boolean
  isSave: boolean
}

export interface SaveUserEditSuccess {
  isSave: boolean
}

export type FetchUserEditDataResponse = BaseResponse<UserEditValues, any>
export type SaveUserEditResponse = BaseResponse<SaveUserEditSuccess, UserEditValuesValidation>
