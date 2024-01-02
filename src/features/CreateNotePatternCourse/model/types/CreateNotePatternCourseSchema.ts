import { type BaseResponse } from '@api/axiosApi'
import {
  type BaseFieldsNotesRequest,
  type BaseFieldsValidation,
  type NotesFields,
} from '@entities/Notes'

export interface CoursePatternRequest extends BaseFieldsNotesRequest {
  linkCourse: NotesFields['text']
  authorCourse: NotesFields['text']
}

export interface CoursePatternResponseSuccess {
  code: string
}

export interface CoursePatternValidation extends BaseFieldsValidation {
  linkCourse?: string
  authorCourse?: string
}

export interface CreateNotePatternCourseSchema {
  values: {
    linkCourse: string
    authorCourse: string
  }
  isLoading: boolean
  validation?: CoursePatternValidation
  createdNoteCode?: string
}

export type CoursePatternResponse =
  BaseResponse<CoursePatternResponseSuccess, CoursePatternValidation>
