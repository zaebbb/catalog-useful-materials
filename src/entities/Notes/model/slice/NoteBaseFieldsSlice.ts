import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  type FieldNoteItem,
  type NoteBaseFieldsSchema,
} from '../types/NoteBaseFieldsSchema'
import { type BaseFieldsValidation } from '../types/NotesSchema'

const initialState: NoteBaseFieldsSchema = {
  values: {
    title: '',
    description: '',
    draft: false,
    fields: [],
  },
  isLoading: false,
}

export const NoteBaseFieldsSlice = createSlice({
  name: 'NoteBaseFieldsSlice',
  initialState,
  reducers: {
    setTitle: (state, { payload }: PayloadAction<string>) => {
      state.values.title = payload
    },
    setDescription: (state, { payload }: PayloadAction<string>) => {
      state.values.description = payload
    },
    setDraft: (state, { payload }: PayloadAction<boolean>) => {
      state.values.draft = payload
    },
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload
    },
    setValidation: (state, { payload }: PayloadAction<BaseFieldsValidation>) => {
      state.validation = payload
    },
    setFields: (state, { payload }: PayloadAction<FieldNoteItem[]>) => {
      state.values.fields = payload
    },
    setId: (state, { payload }: PayloadAction<number>) => {
      state.values.id = payload
    },
  },
})

export const {
  actions: NoteBaseFieldsActions,
  reducer: NoteBaseFieldsReducer,
} = NoteBaseFieldsSlice
