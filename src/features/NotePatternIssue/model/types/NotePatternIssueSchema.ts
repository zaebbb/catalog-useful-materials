import { type BaseResponse } from '@api/axiosApi'
import {
  type BaseFieldsNotesRequest,
  type BaseFieldsValidation, type NoteMode,
  type NotesFields,
} from '@entities/Notes'

export enum IssueViewList {
  IMAGE = 'image',
  LINK = 'link'
}

export interface IssuePatternRequest extends BaseFieldsNotesRequest {
  isImageView: NotesFields['checkbox']
  isLinkView: NotesFields['checkbox']
  linkIssue?: NotesFields['text']
  imageIssue?: NotesFields['file']
}

export interface IssuePatternResponseSuccess {
  code: string
}

export type IssuePatternValidation = BaseFieldsValidation &
Partial<Record<keyof IssuePatternRequest, string>>

export interface NotePatternIssueSchema {
  values: {
    isImageView: boolean
    isLinkView: boolean
    linkIssue: string
  }
  editValues: {
    fileImage: string
  }
  isLoading: boolean
  validation?: IssuePatternValidation
  saveNoteCode?: string
}

export type IssuePatternResponse =
  BaseResponse<IssuePatternResponseSuccess, IssuePatternValidation>

export type IssuePatternKeys = 'linkIssue' | 'imageIssue'

export interface SaveNotePatternIssueParams {
  files: Files
  mode: NoteMode
}
