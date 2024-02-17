import { type ThunkConfig } from '@app/providers/StoreProvider'
import { type FieldNoteItem, getFieldNotePattern } from '@entities/Notes'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { NotePatternBookActions } from '../slice/NotePatternBookSlice'
import { type BookPatternKeys } from '../types/NotePatternBookSchema'

export const InitEditBookData =
  createAsyncThunk<boolean, void, ThunkConfig<string>>(
    'Note/InitEditBookData',
    async (
      _,
      thunkApi
    ) => {
      const {
        getState,
        dispatch,
      } = thunkApi

      const state = getState()

      const fields: FieldNoteItem[] | undefined = state.noteBaseField?.values.fields

      if (!fields) {
        return false
      }

      const fileBook = getFieldNotePattern<BookPatternKeys>(fields, 'fileBook')
      const linkBook = getFieldNotePattern<BookPatternKeys>(fields, 'linkBook')

      if (fileBook) {
        dispatch(NotePatternBookActions.setRemoteBook(fileBook.value))
        dispatch(NotePatternBookActions.setViewFile())
      }

      if (linkBook) {
        dispatch(NotePatternBookActions.setLinkBook(linkBook.value))
        dispatch(NotePatternBookActions.setViewLink())
      }

      return true
    }
  )
