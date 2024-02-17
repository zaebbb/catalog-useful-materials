import { type ThunkConfig } from '@app/providers/StoreProvider'
import { type FieldNoteItem } from '@entities/Notes'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  NotePatternCustomActions,
} from '../slice/NotePatternCustomSlice'

export const InitEditCustomData =
  createAsyncThunk<boolean, void, ThunkConfig<string>>(
    'Note/InitEditCustomData',
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

      dispatch(NotePatternCustomActions.setFieldsValuesRemote(fields))

      return true
    }
  )
