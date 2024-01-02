import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  CreateNotePatternVideo,
} from '../services/CreateNotePatternVideo'
import {
  type CreateNotePatternVideoSchema, type VideoPatternResponse,
} from '../types/CreateNotePatternVideoSchema'

const initialState: CreateNotePatternVideoSchema = {
  values: {
    linkVideo: '',
  },
  isLoading: false,
}

export const CreateNotePatternVideoSlice = createSlice({
  name: 'CreateNotePatternVideoSlice',
  initialState,
  reducers: {
    setLinkVideo: (state, { payload }: PayloadAction<string>) => {
      state.values.linkVideo = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        CreateNotePatternVideo.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        CreateNotePatternVideo.fulfilled,
        (state, { payload }: PayloadAction<VideoPatternResponse>) => {
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
        CreateNotePatternVideo.rejected,
        (state) => {
          state.isLoading = false
          state.validation = {}
        }
      )
  },
})

export const {
  actions: CreateNotePatternVideoActions,
  reducer: CreateNotePatternVideoReducer,
} = CreateNotePatternVideoSlice
