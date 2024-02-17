import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  SaveNotePatternTechnology,
} from '../services/SaveNotePatternTechnology'
import {
  type NotePatternTechnologySchema,
  type TechnologyPatternResponse,
} from '../types/NotePatternTechnologySchema'

const initialState: NotePatternTechnologySchema = {
  values: {
    linkTechnology: '',
    linkDocs: '',
    linkInstall: '',
  },
  editValues: {
    icon: '',
  },
  isLoading: false,
}

export const NotePatternTechnologySlice = createSlice({
  name: 'NotePatternTechnologySlice',
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
    setRemoteIcon: (state, { payload }: PayloadAction<string>) => {
      state.editValues.icon = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        SaveNotePatternTechnology.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        SaveNotePatternTechnology.fulfilled,
        (state, { payload }: PayloadAction<TechnologyPatternResponse>) => {
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
        SaveNotePatternTechnology.rejected,
        (state) => {
          state.isLoading = false
          state.validation = {}
        }
      )
  },
})

export const {
  actions: NotePatternTechnologyActions,
  reducer: NotePatternTechnologyReducer,
} = NotePatternTechnologySlice
