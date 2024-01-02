import { type BaseResponse } from '@api/axiosApi'
import {
  type BaseFieldsNotesRequest,
  type BaseFieldsValidation,
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

export interface ServicePatternValidation extends BaseFieldsValidation {
  linkService?: string
}

export interface CreateNotePatternServiceSchema {
  values: {
    linkService: string
  }
  isLoading: boolean
  validation?: ServicePatternValidation
  createdNoteCode?: string
}

export type ServicePatternResponse =
  BaseResponse<ServicePatternResponseSuccess, ServicePatternValidation>
