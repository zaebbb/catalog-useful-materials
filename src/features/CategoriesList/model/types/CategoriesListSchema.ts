import { type BaseResponse } from '@api/axiosApi'
import { type CategoriesListElement } from '@entities/Category'

export type CategoriesListResponse = BaseResponse<CategoriesListElement[], any>
