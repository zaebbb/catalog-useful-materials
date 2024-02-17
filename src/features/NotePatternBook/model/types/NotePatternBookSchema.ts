import { type BaseResponse } from '@api/axiosApi'
import {
  type BaseFieldsNotesRequest,
  type BaseFieldsValidation, type NoteMode,
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

export type BookPatternValidation = BaseFieldsValidation
& Partial<Record<keyof BookPatternRequest, string>>

export interface NotePatternBookSchema {
  values: {
    isFileView: boolean
    isLinkView: boolean
    linkBook: string
  }
  editValues: {
    fileBook: string
  }
  isLoading: boolean
  validation?: BookPatternValidation
  saveNoteCode?: string
}

export type BookPatternKeys = 'linkBook' | 'fileBook'

export type BookPatternResponse =
  BaseResponse<BookPatternResponseSuccess, BookPatternValidation>

export interface SaveNotePatternBookParams {
  files: Files
  mode: NoteMode
}
