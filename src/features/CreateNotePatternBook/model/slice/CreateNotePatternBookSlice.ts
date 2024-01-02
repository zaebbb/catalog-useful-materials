import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  CreateNotePatternBook,
} from '../services/CreateNotePatternBook'
import {
  type CreateNotePatternBookSchema,
  type BookPatternResponse,
} from '../types/CreateNotePatternBookSchema'

const initialState: CreateNotePatternBookSchema = {
  values: {
    linkBook: '',
    isFileView: true,
    isLinkView: false,
  },
  isLoading: false,
}

export const CreateNotePatternBookSlice = createSlice({
  name: 'CreateNotePatternBookSlice',
  initialState,
  reducers: {
    setLinkBook: (state, { payload }: PayloadAction<string>) => {
      state.values.linkBook = payload
    },
    setViewFile: (state) => {
      state.values.isFileView = true
      state.values.isLinkView = false
    },
    setViewLink: (state) => {
      state.values.isLinkView = true
      state.values.isFileView = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        CreateNotePatternBook.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        CreateNotePatternBook.fulfilled,
        (state, { payload }: PayloadAction<BookPatternResponse>) => {
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
        CreateNotePatternBook.rejected,
        (state) => {
          state.isLoading = false
          state.validation = {}
        }
      )
  },
})

export const {
  actions: CreateNotePatternBookActions,
  reducer: CreateNotePatternBookReducer,
} = CreateNotePatternBookSlice
