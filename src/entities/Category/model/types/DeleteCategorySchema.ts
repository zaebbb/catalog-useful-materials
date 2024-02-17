import { type BaseResponse } from '@api/axiosApi'

export interface DeleteCategorySchema {
  isDeleted: boolean
}

export type DeleteCategoryResponse = BaseResponse<DeleteCategorySchema, any>
