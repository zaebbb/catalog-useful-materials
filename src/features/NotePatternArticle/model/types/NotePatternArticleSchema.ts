import { type BaseResponse } from '@api/axiosApi'
import {
  type BaseFieldsNotesRequest,
  type BaseFieldsValidation, type NoteMode,
  type NotesFields,
} from '@entities/Notes'

export interface ArticlePatternRequest extends BaseFieldsNotesRequest {
  linkNote: NotesFields['text']
  linkVideo?: NotesFields['text']
  image?: NotesFields['file']
}

export interface ArticlePatternCreateResponseSuccess {
  code: string
}

export type ArticlePatternValidation = BaseFieldsValidation
& Partial<Record<keyof ArticlePatternRequest, string>>

export interface NotePatternArticleSchema {
  values: {
    linkNote: string
    linkVideo: string
    isImageParse: boolean
  }
  editValues: {
    image: string
  }
  isLoading: boolean
  validation?: ArticlePatternValidation
  saveNoteCode?: string
}

export type ArticlePatternSaveResponse =
  BaseResponse<ArticlePatternCreateResponseSuccess, ArticlePatternValidation>

export type ArticlePatternKeys = 'linkNote' | 'linkVideo' | 'image'

export interface SaveNotePatternArticleParams {
  files: Files
  mode: NoteMode
}
