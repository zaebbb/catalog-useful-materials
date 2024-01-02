import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  CreateNotePatternCourse,
} from '../services/CreateNotePatternCourse'
import {
  type CreateNotePatternCourseSchema,
  type CoursePatternResponse,
} from '../types/CreateNotePatternCourseSchema'

const initialState: CreateNotePatternCourseSchema = {
  values: {
    linkCourse: '',
    authorCourse: '',
  },
  isLoading: false,
}

export const CreateNotePatternCourseSlice = createSlice({
  name: 'CreateNotePatternCourseSlice',
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
        CreateNotePatternCourse.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        CreateNotePatternCourse.fulfilled,
        (state, { payload }: PayloadAction<CoursePatternResponse>) => {
          state.isLoading = false

          if (payload.validation) {
            state.validation = payload.validation
          }

          if (payload.success) {
            state.createdNoteCode = payload.success.code
          }
        }
      )
      .addCase(
        CreateNotePatternCourse.rejected,
        (state) => {
          state.isLoading = false
          state.validation = {}
        }
      )
  },
})

export const {
  actions: CreateNotePatternCourseActions,
  reducer: CreateNotePatternCourseReducer,
} = CreateNotePatternCourseSlice
