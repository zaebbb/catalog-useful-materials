import { type BaseResponse } from '@api/axiosApi'

export interface DeleteTagSchema {
  isDeleted: boolean
}

export type DeleteTagResponse = BaseResponse<DeleteTagSchema, any>
