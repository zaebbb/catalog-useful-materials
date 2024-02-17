import { type BaseResponse } from '@api/axiosApi'

export interface CreateTag {
  code: string
  name: string
  draft: boolean
}

export interface CreateTagValidation {
  code?: string
  name?: string
  draft?: string
}

export interface CreateTagSchema {
  values: CreateTag
  validation?: CreateTagValidation
  isLoading: boolean
  isCreated: boolean
}

export interface CreateTagSuccess {
  isCreated: boolean
}

export type CreateTagResponse = BaseResponse<CreateTagSuccess, CreateTagValidation>
