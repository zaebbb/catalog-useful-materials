import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  SaveNotePatternService,
} from '../services/SaveNotePatternService'
import {
  type NotePatternServiceSchema, type ServicePatternResponse,
} from '../types/NotePatternServiceSchema'

const initialState: NotePatternServiceSchema = {
  values: {
    linkService: '',
  },
  isLoading: false,
}

export const NotePatternServiceSlice = createSlice({
  name: 'NotePatternServiceSlice',
  initialState,
  reducers: {
    setLinkService: (state, { payload }: PayloadAction<string>) => {
      state.values.linkService = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        SaveNotePatternService.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        SaveNotePatternService.fulfilled,
        (state, { payload }: PayloadAction<ServicePatternResponse>) => {
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
        SaveNotePatternService.rejected,
        (state) => {
          state.isLoading = false
          state.validation = {}
        }
      )
  },
})

export const {
  actions: NotePatternServiceActions,
  reducer: NotePatternServiceReducer,
} = NotePatternServiceSlice
