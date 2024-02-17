import { type ThunkConfig } from '@app/providers/StoreProvider'
import { type FieldNoteItem, getFieldNotePattern } from '@entities/Notes'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { NotePatternVideoActions } from '../slice/NotePatternVideoSlice'
import { type BookPatternKeys } from '../types/NotePatternVideoSchema'

export const InitEditVideoData =
  createAsyncThunk<boolean, void, ThunkConfig<string>>(
    'Note/InitEditVideoData',
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

      const linkVideo = getFieldNotePattern<BookPatternKeys>(fields, 'linkVideo')

      if (linkVideo) {
        dispatch(NotePatternVideoActions.setLinkVideo(linkVideo.value))
      }

      return true
    }
  )
