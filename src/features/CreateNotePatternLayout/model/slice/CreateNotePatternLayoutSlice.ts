import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  CreateNotePatternLayout,
} from '../services/CreateNotePatternLayout'
import {
  type CreateNotePatternLayoutSchema, type LayoutPatternResponse,
} from '../types/CreateNotePatternLayoutSchema'

const initialState: CreateNotePatternLayoutSchema = {
  values: {
    linkLayout: '',
  },
  isLoading: false,
}

export const CreateNotePatternLayoutSlice = createSlice({
  name: 'CreateNotePatternLayoutSlice',
  initialState,
  reducers: {
    setLinkLayout: (state, { payload }: PayloadAction<string>) => {
      state.values.linkLayout = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        CreateNotePatternLayout.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        CreateNotePatternLayout.fulfilled,
        (state, { payload }: PayloadAction<LayoutPatternResponse>) => {
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
        CreateNotePatternLayout.rejected,
        (state) => {
          state.isLoading = false
          state.validation = {}
        }
      )
  },
})

export const {
  actions: CreateNotePatternLayoutActions,
  reducer: CreateNotePatternLayoutReducer,
} = CreateNotePatternLayoutSlice
