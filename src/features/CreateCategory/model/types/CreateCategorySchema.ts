import { type BaseResponse } from '@api/axiosApi'

export interface CreateCategory {
  code: string
  name: string
  draft: boolean
}

export type CreateCategoryValidation = Partial<Record<keyof CreateCategory, string>>

export interface CreateCategorySchema {
  values: CreateCategory
  validation?: CreateCategoryValidation
  isLoading: boolean
  isCreated: boolean
}

export interface CreateCategorySuccess {
  isCreated: boolean
}

export type CreateCategoryResponse = BaseResponse<CreateCategorySuccess, CreateCategoryValidation>
