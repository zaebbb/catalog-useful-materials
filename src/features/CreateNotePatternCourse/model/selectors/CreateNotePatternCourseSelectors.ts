import { type StateSchema } from '@app/providers/StoreProvider'
import { type CreateNotePatternCourseSchema } from '../types/CreateNotePatternCourseSchema'

export const getLinkCourseSelector = (
  state: StateSchema
): string => state.createNotePatternCourse?.values.linkCourse ?? ''

export const getAuthorCourseSelector = (
  state: StateSchema
): string => state.createNotePatternCourse?.values.authorCourse ?? ''

export const getIsLoadingSelector = (
  state: StateSchema
): boolean => state.createNotePatternCourse?.isLoading ?? false

export const getValidationSelector = (
  state: StateSchema
): CreateNotePatternCourseSchema['validation'] => state.createNotePatternCourse?.validation

export const getCreatedCodeSelector = (
  state: StateSchema
): string => state.createNotePatternCourse?.createdNoteCode ?? ''
