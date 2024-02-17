import { type BaseResponse } from '@api/axiosApi'
import {
  type BaseFieldsNotesRequest,
  type BaseFieldsValidation,
  type NoteMode,
} from '@entities/Notes'

export interface NotePatternCustomField {
  code: string
  title: string
  isRequired: boolean
  name: string
  id?: number
}

export interface FetchNotePatternCustomFields {
  fields: Array<Omit<NotePatternCustomField, 'name'>>
}

export interface FetchNotePatternCustomFieldsRequest {
  id: number
}

export type FetchNotePatternCustomResponse = BaseResponse<FetchNotePatternCustomFields, any>

export interface NotePatternCustomFieldsValues extends NotePatternCustomField {
  value: string
}

export type CustomPatternValidation = BaseFieldsValidation &
Partial<Record<string, string>>

export interface CustomPatternResponseSuccess {
  code: string
}

export interface NotePatternCustomSchema {
  fields: NotePatternCustomFieldsValues[]
  validation?: CustomPatternValidation
  isLoading: boolean
  isMountedFields: boolean
  saveNoteCode?: string
}

export type CustomPatternResponse =
  BaseResponse<CustomPatternResponseSuccess, CustomPatternValidation>

export interface SaveNotePatternCustomParams {
  mode: NoteMode
  files: Record<string, Files>
}

export interface CustomPatternRequest extends BaseFieldsNotesRequest {
  stringFields: NotePatternCustomFieldsValues[]
}
