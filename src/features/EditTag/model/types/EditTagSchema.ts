import { type BaseResponse } from '@api/axiosApi'

export interface EditTag {
  id: number
  name: string
  draft: boolean
}

export interface EditTagValidation {
  name?: string
  draft?: string
  id?: string
}

export interface EditTagSchema {
  values: EditTag
  validation?: EditTagValidation
  isLoading: boolean
  isUpdated: boolean
}

export interface EditTagSuccess {
  isUpdated: boolean
}

export type FetchEditTagResponse = BaseResponse<EditTag, void>

export type EditTagResponse = BaseResponse<EditTagSuccess, EditTagValidation>
