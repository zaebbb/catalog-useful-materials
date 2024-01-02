import { type BaseResponse } from '@api/axiosApi'
import {
  type BaseFieldsNotesRequest,
  type BaseFieldsValidation,
  type NotesFields,
} from '@entities/Notes'

export enum BookViewList {
  FILE = 'file',
  LINK = 'link'
}

export interface BookPatternRequest extends BaseFieldsNotesRequest {
  isFileView: NotesFields['checkbox']
  isLinkView: NotesFields['checkbox']
  linkBook?: NotesFields['text']
  fileBook?: NotesFields['file']
}

export interface BookPatternResponseSuccess {
  code: string
}

export interface BookPatternValidation extends BaseFieldsValidation {
  isFileView?: string
  isLinkView?: string
  linkBook?: string
  fileBook?: string
}

export interface CreateNotePatternBookSchema {
  values: {
    isFileView: boolean
    isLinkView: boolean
    linkBook: string
  }
  isLoading: boolean
  validation?: BookPatternValidation
  createdNoteCode?: string
}

export type BookPatternResponse =
  BaseResponse<BookPatternResponseSuccess, BookPatternValidation>
