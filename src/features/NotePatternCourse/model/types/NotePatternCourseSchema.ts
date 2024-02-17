import { type BaseResponse } from '@api/axiosApi'
import {
  type BaseFieldsNotesRequest,
  type BaseFieldsValidation, type NoteMode,
  type NotesFields,
} from '@entities/Notes'

export interface CoursePatternRequest extends BaseFieldsNotesRequest {
  linkCourse: NotesFields['text']
  authorCourse: NotesFields['text']
}

export interface CoursePatternResponseSuccess {
  code: string
}

export type CoursePatternValidation = BaseFieldsValidation
& Partial<Record<keyof CoursePatternRequest, string>>

export interface NotePatternCourseSchema {
  values: {
    linkCourse: string
    authorCourse: string
  }
  isLoading: boolean
  validation?: CoursePatternValidation
  saveNoteCode?: string
}

export type CoursePatternKeys = 'linkCourse' | 'authorCourse'

export type CoursePatternResponse =
  BaseResponse<CoursePatternResponseSuccess, CoursePatternValidation>

export interface SaveNotePatternCourseParams {
  mode: NoteMode
}
