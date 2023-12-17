import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  CreateNotePatternCode,
} from '../services/CreateNotePatternCode'
import {
  type CodePatternResponse,
  type CreateNotePatternCodeSchema,
} from '../types/CreateNotePatternCodeSchema'

const initialState: CreateNotePatternCodeSchema = {
  values: {
    code: '',
  },
  isLoading: false,
}

export const CreateNotePatternCodeSlice = createSlice({
  name: 'CreateNotePatternCodeSlice',
  initialState,
  reducers: {
    setCode: (state, { payload }: PayloadAction<string>) => {
      state.values.code = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        CreateNotePatternCode.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        CreateNotePatternCode.fulfilled,
        (state, { payload }: PayloadAction<CodePatternResponse>) => {
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
        CreateNotePatternCode.rejected,
        (state) => {
          state.isLoading = false
          state.validation = {}
        }
      )
  },
})

export const {
  actions: CreateNotePatternCodeActions,
  reducer: CreateNotePatternCodeReducer,
} = CreateNotePatternCodeSlice
