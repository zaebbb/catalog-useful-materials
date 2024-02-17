import { type BaseResponse } from '@api/axiosApi'
import { type UserProfile } from '@entities/User'

export type ProfileValidation = Omit<UserProfile, 'avatar'> & {
  avatar?: string
}

export interface UserProfileData extends UserProfile {
  avatarFilename?: string
}

export interface ProfileSchema {
  user: UserProfileData
  validation?: ProfileValidation
  isLoading: boolean
  _mounted: boolean
}

export type ProfileResponse = BaseResponse<UserProfile, ProfileValidation>
