import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type NotesTypesCodeList, type NotesTypesSchema } from '../types/NotesTypesSchema'

const initialState: NotesTypesSchema = {
  allNotesTypesPath: '/remote-data/notes-types-list',
  isLoading: false,
}

export const NotesTypesSlice = createSlice(({
  name: 'NotesTypesSlice',
  initialState,
  reducers: {
    setCurrentType: (
      state,
      { payload }: PayloadAction<SelectFieldOption<NotesTypesCodeList> | undefined>
    ) => {
      state.currentNoteType = payload
    },
    clearType: (state) => {
      state.currentNoteType = undefined
    },
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload
    },
    setValidation: (state, { payload }: PayloadAction<string>) => {
      state.validation = payload
    },
  },
}))

export const {
  actions: NotesTypesActions,
  reducer: NotesTypesReducer,
} = NotesTypesSlice
