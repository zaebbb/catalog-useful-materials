import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  SaveNotePatternIssue,
} from '../services/SaveNotePatternIssue'
import {
  type NotePatternIssueSchema,
  type IssuePatternResponse,
} from '../types/NotePatternIssueSchema'

const initialState: NotePatternIssueSchema = {
  values: {
    linkIssue: '',
    isImageView: true,
    isLinkView: false,
  },
  editValues: {
    fileImage: '',
  },
  isLoading: false,
}

export const NotePatternIssueSlice = createSlice({
  name: 'NotePatternIssueSlice',
  initialState,
  reducers: {
    setLinkIssue: (state, { payload }: PayloadAction<string>) => {
      state.values.linkIssue = payload
    },
    setViewImage: (state) => {
      state.values.isImageView = true
      state.values.isLinkView = false
    },
    setViewLink: (state) => {
      state.values.isLinkView = true
      state.values.isImageView = false
    },
    setRemoteImage: (state, { payload }: PayloadAction<string>) => {
      state.editValues.fileImage = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        SaveNotePatternIssue.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        SaveNotePatternIssue.fulfilled,
        (state, { payload }: PayloadAction<IssuePatternResponse>) => {
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
        SaveNotePatternIssue.rejected,
        (state) => {
          state.isLoading = false
          state.validation = {}
        }
      )
  },
})

export const {
  actions: NotePatternIssueActions,
  reducer: NotePatternIssueReducer,
} = NotePatternIssueSlice
