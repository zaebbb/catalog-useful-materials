import { type ThunkConfig } from '@app/providers/StoreProvider'
import { NoteBaseFieldsActions } from '@entities/Notes'
import { NotesTypesActions } from '@entities/NotesTypes'

import { makeFormData } from '@lib/helpers/makeFormData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  type CoursePatternRequest, type CoursePatternResponse, type SaveNotePatternCourseParams,
} from '../types/NotePatternCourseSchema'

export const SaveNotePatternCourse =
  createAsyncThunk<CoursePatternResponse, SaveNotePatternCourseParams, ThunkConfig<string>>(
    'Note/SaveNotePatternCourse',
    async (
      params,
      thunkApi
    ) => {
      const {
        mode,
      } = params
      const {
        extra,
        rejectWithValue,
        dispatch,
        getState,
      } = thunkApi

      const state = getState()

      const formData: CoursePatternRequest = {
        mode,
        id: state.noteBaseField?.values.id,
        authorCourse: state.notePatternCourse?.values.authorCourse ?? '',
        linkCourse: state.notePatternCourse?.values.linkCourse ?? '',
        userId: state.user.user?.id ?? 0,
        title: state.noteBaseField?.values.title ?? '',
        draft: state.noteBaseField?.values.draft ?? false,
        description: state.noteBaseField?.values.description ?? '',
        viewId: state.notesViews?.currentNoteView?.id ?? 0,
        typeId: state.notesTypes?.currentNoteType?.id ?? 0,
        categoryId: state.category?.select.currentCategory?.id ?? 0,
        tagsIds: state.tag?.select.currentTagsIds ?? [],
      }

      try {
        const makeData = makeFormData<CoursePatternRequest>({
          data: formData,
        })

        const response = await extra.api.post<CoursePatternResponse>(
          '/notes/save-pattern-course',
          makeData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )

        if (!response.data) {
          throw new Error()
        }

        if (response.data.validation) {
          dispatch(NoteBaseFieldsActions.setValidation(response.data.validation))
          dispatch(NotesTypesActions.setValidation(response.data.validation.typeId ?? ''))
        }

        dispatch(NoteBaseFieldsActions.setIsLoading(false))
        dispatch(NotesTypesActions.setIsLoading(false))

        return response.data
      } catch (e) {
        return rejectWithValue(e as string)
      }
    }
  )
