import { type BaseResponse } from '@api/axiosApi'
import {
  type BaseFieldsNotesRequest,
  type BaseFieldsValidation,
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

export interface LayoutPatternValidation extends BaseFieldsValidation {
  linkLayout?: string
  imageLayout?: string
}

export interface CreateNotePatternLayoutSchema {
  values: {
    linkLayout: string
  }
  isLoading: boolean
  validation?: LayoutPatternValidation
  createdNoteCode?: string
}

export type LayoutPatternResponse =
  BaseResponse<LayoutPatternResponseSuccess, LayoutPatternValidation>
