import { type BaseResponse } from '@api/axiosApi'
import { type UserData } from '@entities/User'

export type UsersListResponse = BaseResponse<UserData[], any>
