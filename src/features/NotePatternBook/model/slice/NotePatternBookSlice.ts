import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  SaveNotePatternBook,
} from '../services/SaveNotePatternBook'
import {
  type NotePatternBookSchema,
  type BookPatternResponse,
} from '../types/NotePatternBookSchema'

const initialState: NotePatternBookSchema = {
  values: {
    linkBook: '',
    isFileView: true,
    isLinkView: false,
  },
  editValues: {
    fileBook: '',
  },
  isLoading: false,
}

export const NotePatternBookSlice = createSlice({
  name: 'NotePatternBookSlice',
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
    setRemoteBook: (state, { payload }: PayloadAction<string>) => {
      state.editValues.fileBook = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        SaveNotePatternBook.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        SaveNotePatternBook.fulfilled,
        (state, { payload }: PayloadAction<BookPatternResponse>) => {
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
        SaveNotePatternBook.rejected,
        (state) => {
          state.isLoading = false
          state.validation = {}
        }
      )
  },
})

export const {
  actions: NotePatternBookActions,
  reducer: NotePatternBookReducer,
} = NotePatternBookSlice
