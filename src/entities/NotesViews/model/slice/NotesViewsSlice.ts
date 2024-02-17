import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type NotesViewsCodeList, type NotesViewsSchema } from '../types/NotesViewsSchema'

const initialState: NotesViewsSchema = {
  allNotesViewsPath: '/remote-data/notes-views-list',
}

export const NotesViewsSlice = createSlice(({
  name: 'NotesViewsSlice',
  initialState,
  reducers: {
    setCurrentView: (state, { payload }: PayloadAction<SelectFieldOption<NotesViewsCodeList>>) => {
      state.currentNoteView = payload
    },
    clearCurrentView: (state) => {
      state.currentNoteView = undefined
      state.selected = undefined
    },
    setSelectedView: (state, { payload }: PayloadAction<SelectFieldOption<NotesViewsCodeList>>) => {
      state.selected = payload
    },
  },
}))

export const {
  actions: NotesViewsActions,
  reducer: NotesViewsReducer,
} = NotesViewsSlice
