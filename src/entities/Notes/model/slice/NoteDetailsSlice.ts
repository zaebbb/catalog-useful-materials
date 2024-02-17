import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { FetchNoteData } from '../services/FetchNoteData'
import {
  type NoteDetailsResponse,
  type NoteDetailsSchema,
} from '../types/NotesDetailsSchema'

const initialState: NoteDetailsSchema = {
  isLoading: true,
}

export const NoteDetailsSlice = createSlice({
  name: 'NoteDetailsSlice',
  initialState,
  reducers: {
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        FetchNoteData.pending,
        (state) => {
          state.isLoading = true
        }
      )
      .addCase(
        FetchNoteData.fulfilled,
        (state, { payload }: PayloadAction<NoteDetailsResponse>) => {
          if (payload.success) {
            state.note = payload.success
          }

          state.isLoading = false
        }
      )
      .addCase(
        FetchNoteData.rejected,
        (state) => {
          state.isLoading = false
        }
      )
  },
})

export const {
  actions: NoteDetailsActions,
  reducer: NoteDetailsReducer,
} = NoteDetailsSlice
