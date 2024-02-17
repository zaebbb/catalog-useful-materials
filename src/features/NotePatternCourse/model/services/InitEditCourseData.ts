import { type ThunkConfig } from '@app/providers/StoreProvider'
import { type FieldNoteItem, getFieldNotePattern } from '@entities/Notes'
import { createAsyncThunk } from '@reduxjs/toolkit'

import {
  NotePatternCourseActions,
} from '../slice/NotePatternCourseSlice'
import { type CoursePatternKeys } from '../types/NotePatternCourseSchema'

export const InitEditCourseData =
  createAsyncThunk<boolean, void, ThunkConfig<string>>(
    'Note/InitEditCourseData',
    async (
      _,
      thunkApi
    ) => {
      const {
        getState,
        dispatch,
      } = thunkApi

      const state = getState()

      const fields: FieldNoteItem[] | undefined = state.noteBaseField?.values.fields

      if (!fields) {
        return false
      }

      const linkCourse = getFieldNotePattern<CoursePatternKeys>(fields, 'linkCourse')
      const authorCourse = getFieldNotePattern<CoursePatternKeys>(fields, 'authorCourse')

      if (linkCourse) {
        dispatch(NotePatternCourseActions.setLinkCourse(linkCourse.value))
      }

      if (authorCourse) {
        dispatch(NotePatternCourseActions.setAuthorCourse(authorCourse.value))
      }

      return true
    }
  )
