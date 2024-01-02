import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  CreateNotePatternTechnology,
} from '../services/CreateNotePatternTechnology'
import {
  type CreateNotePatternTechnologySchema,
  type TechnologyPatternResponse,
} from '../types/CreateNotePatternTechnologySchema'

const initialState: CreateNotePatternTechnologySchema = {
  values: {
    linkTechnology: '',
    linkDocs: '',
    linkInstall: '',
  },
  isLoading: false,
}

export const CreateNotePatternTechnologySlice = createSlice({
  name: 'CreateNotePatternTechnologySlice',
  initialState,
  reducers: {
    setLinkTechnology: (state, { payload }: PayloadAction<string>) => {
      state.values.linkTechnology = payload
    },
    setLinkDocs: (state, { payload }: PayloadAction<string>) => {
      state.values.linkDocs = payload
    },
    setLinkInstall: (state, { payload }: PayloadAction<string>) => {
      state.values.linkInstall = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        CreateNotePatternTechnology.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        CreateNotePatternTechnology.fulfilled,
        (state, { payload }: PayloadAction<TechnologyPatternResponse>) => {
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
        CreateNotePatternTechnology.rejected,
        (state) => {
          state.isLoading = false
          state.validation = {}
        }
      )
  },
})

export const {
  actions: CreateNotePatternTechnologyActions,
  reducer: CreateNotePatternTechnologyReducer,
} = CreateNotePatternTechnologySlice
