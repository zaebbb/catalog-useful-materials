import { type BaseResponse } from '@api/axiosApi'
import { type Category } from '@entities/Category'
import { type NotesTypes } from '@entities/NotesTypes'
import { type NotesViews } from '@entities/NotesViews'
import { type Tag } from '@entities/Tag'
import { type UserBaseData } from '@entities/User'

export interface FieldNoteOption {
  value: string
  name: string
}

export interface PatternArticle {
  linkNote: FieldNoteOption
  linkVideo: FieldNoteOption
  image: FieldNoteOption
}

export interface PatternCode {
  code: FieldNoteOption
}

export interface BaseFieldsDetails {
  type: NotesTypes
  view: NotesViews
  user: UserBaseData
  category: Category
  tags: Tag[]

  title: string
  description: string
  draft: boolean

  patternArticle?: PatternArticle
  patternCode?: PatternCode
}

export type NoteDetailsResponse = BaseResponse<BaseFieldsDetails, any>

export interface NoteDetailsSchema {
  isLoading: boolean
  note?: BaseFieldsDetails
}
