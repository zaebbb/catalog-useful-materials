import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  SaveNotePatternCourse,
} from '../services/SaveNotePatternCourse'
import {
  type NotePatternCourseSchema,
  type CoursePatternResponse,
} from '../types/NotePatternCourseSchema'

const initialState: NotePatternCourseSchema = {
  values: {
    linkCourse: '',
    authorCourse: '',
  },
  isLoading: false,
}

export const NotePatternCourseSlice = createSlice({
  name: 'NotePatternCourseSlice',
  initialState,
  reducers: {
    setLinkCourse: (state, { payload }: PayloadAction<string>) => {
      state.values.linkCourse = payload
    },
    setAuthorCourse: (state, { payload }: PayloadAction<string>) => {
      state.values.authorCourse = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        SaveNotePatternCourse.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        SaveNotePatternCourse.fulfilled,
        (state, { payload }: PayloadAction<CoursePatternResponse>) => {
          state.isLoading = false

          if (payload.validation) {
            state.validation = payload.validation
          }

          if (payload.success) {
            state.saveNoteCode = payload.success.code
          }
        }
      )
      .addCase(
        SaveNotePatternCourse.rejected,
        (state) => {
          state.isLoading = false
          state.validation = {}
        }
      )
  },
})

export const {
  actions: NotePatternCourseActions,
  reducer: NotePatternCourseReducer,
} = NotePatternCourseSlice
