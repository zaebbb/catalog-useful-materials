import { type BaseResponse } from '@api/axiosApi'
import {
  type BaseFieldsNotesRequest,
  type BaseFieldsValidation,
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

export interface IssuePatternValidation extends BaseFieldsValidation {
  isImageView?: string
  isLinkView?: string
  linkIssue?: string
  imageIssue?: string
}

export interface CreateNotePatternIssueSchema {
  values: {
    isImageView: boolean
    isLinkView: boolean
    linkIssue: string
  }
  isLoading: boolean
  validation?: IssuePatternValidation
  createdNoteCode?: string
}

export type IssuePatternResponse =
  BaseResponse<IssuePatternResponseSuccess, IssuePatternValidation>
