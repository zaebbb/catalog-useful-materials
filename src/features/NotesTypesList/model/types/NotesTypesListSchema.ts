import { type BaseResponse } from '@api/axiosApi'
import { type NotesTypesListElement } from '@entities/NotesTypes'

export type NotesTypesListResponse = BaseResponse<NotesTypesListElement[], any>
