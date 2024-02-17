import { type StateSchema } from '@app/providers/StoreProvider'
import { type NotePatternCourseSchema } from '../types/NotePatternCourseSchema'

export const getLinkCourseSelector = (
  state: StateSchema
): string => state.notePatternCourse?.values.linkCourse ?? ''

export const getAuthorCourseSelector = (
  state: StateSchema
): string => state.notePatternCourse?.values.authorCourse ?? ''

export const getIsLoadingSelector = (
  state: StateSchema
): boolean => state.notePatternCourse?.isLoading ?? false

export const getValidationSelector = (
  state: StateSchema
): NotePatternCourseSchema['validation'] => state.notePatternCourse?.validation

export const getSaveCodeSelector = (
  state: StateSchema
): string => state.notePatternCourse?.saveNoteCode ?? ''
