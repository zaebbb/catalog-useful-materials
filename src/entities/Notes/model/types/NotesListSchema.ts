import { type BaseResponse } from '@api/axiosApi'
import { type Category } from '@entities/Category'

export interface UserNotesListElement {
  id: number
  title: string
  description: string
  code: string
  createdAt: string
  category: Category
}

export type UserNoteListResponse = BaseResponse<UserNotesListElement[], any>
