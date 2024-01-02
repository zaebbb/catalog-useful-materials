import { type BaseResponse } from '@api/axiosApi'
import {
  type BaseFieldsNotesRequest,
  type BaseFieldsValidation,
  type NotesFields,
} from '@entities/Notes'

export enum VideoCodeList {
  LINK_VIDEO = 'linkVideo'
}

export interface VideoPatternRequest extends BaseFieldsNotesRequest {
  linkVideo: NotesFields['text']
}

export interface VideoPatternResponseSuccess {
  code: string
}

export interface VideoPatternValidation extends BaseFieldsValidation {
  linkVideo?: string
}

export interface CreateNotePatternVideoSchema {
  values: {
    linkVideo: string
  }
  isLoading: boolean
  validation?: VideoPatternValidation
  createdNoteCode?: string
}

export type VideoPatternResponse =
  BaseResponse<VideoPatternResponseSuccess, VideoPatternValidation>
