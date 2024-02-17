import { type BaseResponse } from '@api/axiosApi'
import {
  type BaseFieldsNotesRequest,
  type BaseFieldsValidation, type NoteMode,
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

export type VideoPatternValidation = BaseFieldsValidation
& Partial<Record<keyof VideoPatternRequest, string>>

export interface NotePatternVideoSchema {
  values: {
    linkVideo: string
  }
  isLoading: boolean
  validation?: VideoPatternValidation
  saveNoteCode?: string
}

export type BookPatternKeys = 'linkVideo'

export type VideoPatternResponse =
  BaseResponse<VideoPatternResponseSuccess, VideoPatternValidation>

export interface SaveNotePatternVideoParams {
  mode: NoteMode
}
