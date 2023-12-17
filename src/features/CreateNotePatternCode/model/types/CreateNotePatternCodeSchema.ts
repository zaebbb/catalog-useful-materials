import { type BaseResponse } from '@api/axiosApi'
import {
  type BaseFieldsNotesRequest,
  type BaseFieldsValidation,
  type NotesFields,
} from '@entities/Notes'

export interface CodePatternRequest extends BaseFieldsNotesRequest {
  code: NotesFields['text']
}

export interface CodePatternResponseSuccess {
  code: string
}

export interface CodePatternValidation extends BaseFieldsValidation {
  code?: string
}

export interface CreateNotePatternCodeSchema {
  values: {
    code: string
  }
  isLoading: boolean
  validation?: CodePatternValidation
  createdNoteCode?: string
}

export type CodePatternResponse =
  BaseResponse<CodePatternResponseSuccess, CodePatternValidation>
