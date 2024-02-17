import { type BaseResponse } from '@api/axiosApi'
import {
  type BaseFieldsNotesRequest,
  type BaseFieldsValidation, type NoteMode,
  type NotesFields,
} from '@entities/Notes'

export interface CodePatternRequest extends BaseFieldsNotesRequest {
  code: NotesFields['text']
}

export interface CodePatternResponseSuccess {
  code: string
}

export type CodePatternValidation = BaseFieldsValidation
& Partial<Record<keyof CodePatternRequest, string>>

export interface NotePatternCodeSchema {
  values: {
    code: string
  }
  isLoading: boolean
  validation?: CodePatternValidation
  saveNoteCode?: string
}

export type CodePatternKeys = 'code'

export type CodePatternResponse =
  BaseResponse<CodePatternResponseSuccess, CodePatternValidation>

export interface SaveNotePatternCodeParams {
  mode: NoteMode
}
