import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  CreateNotePatternService,
} from '../services/CreateNotePatternService'
import {
  type CreateNotePatternServiceSchema, type ServicePatternResponse,
} from '../types/CreateNotePatternServiceSchema'

const initialState: CreateNotePatternServiceSchema = {
  values: {
    linkService: '',
  },
  isLoading: false,
}

export const CreateNotePatternServiceSlice = createSlice({
  name: 'CreateNotePatternServiceSlice',
  initialState,
  reducers: {
    setLinkService: (state, { payload }: PayloadAction<string>) => {
      state.values.linkService = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        CreateNotePatternService.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        CreateNotePatternService.fulfilled,
        (state, { payload }: PayloadAction<ServicePatternResponse>) => {
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
        CreateNotePatternService.rejected,
        (state) => {
          state.isLoading = false
          state.validation = {}
        }
      )
  },
})

export const {
  actions: CreateNotePatternServiceActions,
  reducer: CreateNotePatternServiceReducer,
} = CreateNotePatternServiceSlice
