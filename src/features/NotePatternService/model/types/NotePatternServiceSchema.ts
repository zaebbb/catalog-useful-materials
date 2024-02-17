import { type BaseResponse } from '@api/axiosApi'
import {
  type BaseFieldsNotesRequest,
  type BaseFieldsValidation, type NoteMode,
  type NotesFields,
} from '@entities/Notes'

export enum ServiceCodeList {
  LINK_SERVICE = 'linkService'
}

export interface ServicePatternRequest extends BaseFieldsNotesRequest {
  linkService: NotesFields['text']
}

export interface ServicePatternResponseSuccess {
  code: string
}

export type ServicePatternValidation = BaseFieldsValidation
& Partial<Record<keyof ServicePatternRequest, string>>

export interface NotePatternServiceSchema {
  values: {
    linkService: string
  }
  isLoading: boolean
  validation?: ServicePatternValidation
  saveNoteCode?: string
}

export type ServicePatternKeys = 'linkService'

export type ServicePatternResponse =
  BaseResponse<ServicePatternResponseSuccess, ServicePatternValidation>

export interface SaveNotePatternServiceParams {
  mode: NoteMode
}
