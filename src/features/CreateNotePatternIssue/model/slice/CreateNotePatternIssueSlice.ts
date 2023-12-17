import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  CreateNotePatternIssue,
} from '../services/CreateNotePatternIssue'
import {
  type CreateNotePatternIssueSchema,
  type IssuePatternResponse,
} from '../types/CreateNotePatternIssueSchema'

const initialState: CreateNotePatternIssueSchema = {
  values: {
    linkIssue: '',
    isImageView: true,
    isLinkView: false,
  },
  isLoading: false,
}

export const CreateNotePatternIssueSlice = createSlice({
  name: 'CreateNotePatternIssueSlice',
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        CreateNotePatternIssue.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        CreateNotePatternIssue.fulfilled,
        (state, { payload }: PayloadAction<IssuePatternResponse>) => {
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
        CreateNotePatternIssue.rejected,
        (state) => {
          state.isLoading = false
          state.validation = {}
        }
      )
  },
})

export const {
  actions: CreateNotePatternIssueActions,
  reducer: CreateNotePatternIssueReducer,
} = CreateNotePatternIssueSlice
