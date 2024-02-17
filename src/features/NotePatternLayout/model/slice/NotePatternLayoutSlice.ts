import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  SaveNotePatternLayout,
} from '../services/SaveNotePatternLayout'
import {
  type NotePatternLayoutSchema, type LayoutPatternResponse,
} from '../types/NotePatternLayoutSchema'

const initialState: NotePatternLayoutSchema = {
  values: {
    linkLayout: '',
  },
  editValues: {
    imageLayout: '',
  },
  isLoading: false,
}

export const NotePatternLayoutSlice = createSlice({
  name: 'NotePatternLayoutSlice',
  initialState,
  reducers: {
    setLinkLayout: (state, { payload }: PayloadAction<string>) => {
      state.values.linkLayout = payload
    },
    setRemoteImage: (state, { payload }: PayloadAction<string>) => {
      state.editValues.imageLayout = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        SaveNotePatternLayout.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        SaveNotePatternLayout.fulfilled,
        (state, { payload }: PayloadAction<LayoutPatternResponse>) => {
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
        SaveNotePatternLayout.rejected,
        (state) => {
          state.isLoading = false
          state.validation = {}
        }
      )
  },
})

export const {
  actions: NotePatternLayoutActions,
  reducer: NotePatternLayoutReducer,
} = NotePatternLayoutSlice
