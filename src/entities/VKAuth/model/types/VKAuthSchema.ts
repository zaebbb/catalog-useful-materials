import { type BaseResponse } from '@api/axiosApi'
import { type UserResponseData } from '@entities/User'

export type VkTokenType = 'silent_token'

export interface VkAuthRedirectResponse {
  auth: number
  hash: string
  loadExternalUsers: boolean
  token: string
  ttl: number
  type: VkTokenType
  uuid: string
}

export interface VKAuthAppId {
  appId: string
}

export type VKAuthGetTokenResponse = BaseResponse<VKAuthAppId, any>

export interface VKAuthSchema {
  appId?: number
  auth: boolean
  // user?: AuthData
  // mode: AuthMode
  // token: string
  isLoading: boolean
  // auth: boolean
}

export interface VkGetDataRequest {
  token: string
  uuid: string
}

export interface SaveVkAuthCheck {
  auth: boolean
}

export type SaveVkResponse = BaseResponse<UserResponseData & SaveVkAuthCheck, any>
