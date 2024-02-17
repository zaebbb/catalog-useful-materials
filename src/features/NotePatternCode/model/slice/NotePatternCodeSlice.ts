import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  SaveNotePatternCode,
} from '../services/SaveNotePatternCode'
import {
  type CodePatternResponse,
  type NotePatternCodeSchema,
} from '../types/NotePatternCodeSchema'

const initialState: NotePatternCodeSchema = {
  values: {
    code: '',
  },
  isLoading: false,
}

export const NotePatternCodeSlice = createSlice({
  name: 'NotePatternCodeSlice',
  initialState,
  reducers: {
    setCode: (state, { payload }: PayloadAction<string>) => {
      state.values.code = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        SaveNotePatternCode.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        SaveNotePatternCode.fulfilled,
        (state, { payload }: PayloadAction<CodePatternResponse>) => {
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
        SaveNotePatternCode.rejected,
        (state) => {
          state.isLoading = false
          state.validation = {}
        }
      )
  },
})

export const {
  actions: NotePatternCodeActions,
  reducer: NotePatternCodeReducer,
} = NotePatternCodeSlice
