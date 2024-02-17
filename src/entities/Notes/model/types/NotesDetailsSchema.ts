import { type BaseResponse } from '@api/axiosApi'
import { type Category } from '@entities/Category'
import { type NotesTypes } from '@entities/NotesTypes'
import { type NotesViews } from '@entities/NotesViews'
import { type Tag } from '@entities/Tag'
import { type UserBaseData } from '@entities/User'
import { type CustomFieldCodeList } from './CustomFieldCode'

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

export interface PatternIssue {
  linkIssue: FieldNoteOption
  imageIssue: FieldNoteOption
}

export interface PatternLayout {
  linkLayout: FieldNoteOption
  imageLayout: FieldNoteOption
}

export interface PatternService {
  linkService: FieldNoteOption
}

export interface PatternBook {
  linkBook: FieldNoteOption
  fileBook: FieldNoteOption
}

export interface PatternVideo {
  linkVideo: FieldNoteOption
}

export interface PatternTechnology {
  linkTechnology: FieldNoteOption
  linkInstall: FieldNoteOption
  linkDocs: FieldNoteOption
  icon: FieldNoteOption
}

export interface PatternCourse {
  linkCourse: FieldNoteOption
  authorCourse: FieldNoteOption
}

export interface FieldNoteOptionCustom extends FieldNoteOption {
  code: CustomFieldCodeList
}

export interface BaseFieldsDetails {
  type: NotesTypes
  view: NotesViews
  user: UserBaseData
  category: Category
  tags: Tag[]

  title: string
  description: string
  createdAt: string
  draft: boolean

  patternArticle?: PatternArticle
  patternCode?: PatternCode
  patternIssue?: PatternIssue
  patternLayout?: PatternLayout
  patternService?: PatternService
  patternBook?: PatternBook
  patternVideo?: PatternVideo
  patternTechnology?: PatternTechnology
  patternCourse?: PatternCourse
  patternCustom?: FieldNoteOptionCustom[]
}

export type NoteDetailsResponse = BaseResponse<BaseFieldsDetails, any>

export interface NoteDetailsSchema {
  isLoading: boolean
  note?: BaseFieldsDetails
}
