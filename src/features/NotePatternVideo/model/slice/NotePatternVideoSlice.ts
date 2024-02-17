import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  SaveNotePatternVideo,
} from '../services/SaveNotePatternVideo'
import {
  type NotePatternVideoSchema, type VideoPatternResponse,
} from '../types/NotePatternVideoSchema'

const initialState: NotePatternVideoSchema = {
  values: {
    linkVideo: '',
  },
  isLoading: false,
}

export const NotePatternVideoSlice = createSlice({
  name: 'NotePatternVideoSlice',
  initialState,
  reducers: {
    setLinkVideo: (state, { payload }: PayloadAction<string>) => {
      state.values.linkVideo = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        SaveNotePatternVideo.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        SaveNotePatternVideo.fulfilled,
        (state, { payload }: PayloadAction<VideoPatternResponse>) => {
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
        SaveNotePatternVideo.rejected,
        (state) => {
          state.isLoading = false
          state.validation = {}
        }
      )
  },
})

export const {
  actions: NotePatternVideoActions,
  reducer: NotePatternVideoReducer,
} = NotePatternVideoSlice
