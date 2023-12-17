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
  },
}))

export const {
  actions: NotesViewsActions,
  reducer: NotesViewsReducer,
} = NotesViewsSlice
