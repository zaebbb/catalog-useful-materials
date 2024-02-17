import { type BaseResponse } from '@api/axiosApi'
import { type FieldNoteItem } from '@entities/Notes'
import { type NotesTypesCodeList } from '@entities/NotesTypes'
import { type NotesViewsCodeList } from '@entities/NotesViews'
import { type UserBaseData } from '@entities/User'

export interface EditNoteResponseData {
  type: SelectFieldOption<NotesTypesCodeList>
  view: SelectFieldOption<NotesViewsCodeList>
  user: UserBaseData
  category: SelectFieldOption<string>
  tags: SelectItems<string>
  fields: FieldNoteItem[]

  title: string
  code: string
  description: string
  draft: boolean
  id: number
}

export type EditNoteResponse = BaseResponse<EditNoteResponseData, any>
