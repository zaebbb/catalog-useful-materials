import { type BaseResponse } from '@api/axiosApi'
import {
  type BaseFieldsNotesRequest,
  type BaseFieldsValidation,
  type NotesFields,
} from '@entities/Notes'

export interface ArticlePatternRequest extends BaseFieldsNotesRequest {
  linkNote: NotesFields['text']
  linkVideo?: NotesFields['text']
  image?: NotesFields['file']
}

export interface ArticlePatternResponseSuccess {
  code: string
}

export interface ArticlePatternValidation extends BaseFieldsValidation {
  linkNote?: string
  linkVideo?: string
  image?: string
}

export interface CreateNotePatternArticleSchema {
  values: {
    linkNote: string
    linkVideo: string
    isImageParse: boolean
  }
  isLoading: boolean
  validation?: ArticlePatternValidation
  createdNoteCode?: string
}

export type ArticlePatternResponse =
  BaseResponse<ArticlePatternResponseSuccess, ArticlePatternValidation>
