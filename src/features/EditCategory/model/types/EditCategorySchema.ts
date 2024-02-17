import { type BaseResponse } from '@api/axiosApi'

export interface EditCategory {
  id: number
  name: string
  draft: boolean
}

export interface EditCategoryValidation {
  name?: string
  draft?: string
  id?: string
}

export interface EditCategorySchema {
  values: EditCategory
  validation?: EditCategoryValidation
  isLoading: boolean
  isUpdated: boolean
}

export interface EditCategorySuccess {
  isUpdated: boolean
}

export type FetchEditCategoryResponse = BaseResponse<EditCategory, void>

export type EditCategoryResponse = BaseResponse<EditCategorySuccess, EditCategoryValidation>
