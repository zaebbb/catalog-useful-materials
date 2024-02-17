import { type StateSchema } from '@app/providers/StoreProvider'
import { type NotesViewsSchema } from '../types/NotesViewsSchema'

export const getRemotePathSelector =
  (state: StateSchema): string => state.notesViews?.allNotesViewsPath ?? ''

export const getCurrentElementSelector = (
  state: StateSchema
): NotesViewsSchema['currentNoteView'] => state.notesViews?.currentNoteView

export const getSelectedSelector = (
  state: StateSchema
): NotesViewsSchema['selected'] => state.notesViews?.selected
