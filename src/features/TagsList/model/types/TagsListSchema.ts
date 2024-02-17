import { type BaseResponse } from '@api/axiosApi'
import { type TagsListElement } from '@entities/Tag'

export type TagsListResponse = BaseResponse<TagsListElement[], any>
