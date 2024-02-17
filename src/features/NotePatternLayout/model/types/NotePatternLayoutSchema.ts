import { type BaseResponse } from '@api/axiosApi'
import {
  type BaseFieldsNotesRequest,
  type BaseFieldsValidation, type NoteMode,
  type NotesFields,
} from '@entities/Notes'

export enum LayoutCodeList {
  IMAGE = 'image',
  LINK = 'link'
}

export interface LayoutPatternRequest extends BaseFieldsNotesRequest {
  linkLayout: NotesFields['text']
  imageLayout: NotesFields['file']
}

export interface LayoutPatternResponseSuccess {
  code: string
}

export type LayoutPatternValidation = BaseFieldsValidation
& Partial<Record<keyof LayoutPatternRequest, string>>

export interface NotePatternLayoutSchema {
  values: {
    linkLayout: string
  }
  editValues: {
    imageLayout: string
  }
  isLoading: boolean
  validation?: LayoutPatternValidation
  saveNoteCode?: string
}

export type LayoutPatternKeys = 'linkLayout' | 'imageLayout'

export type LayoutPatternResponse =
  BaseResponse<LayoutPatternResponseSuccess, LayoutPatternValidation>

export interface SaveNotePatternLayoutParams {
  files: Files
  mode: NoteMode
}
