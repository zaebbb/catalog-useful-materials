import { type ThunkConfig } from '@app/providers/StoreProvider'
import { type FieldNoteItem, getFieldNotePattern } from '@entities/Notes'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { NotePatternCodeActions } from '../slice/NotePatternCodeSlice'
import { type CodePatternKeys } from '../types/NotePatternCodeSchema'

export const InitEditCodeData =
  createAsyncThunk<boolean, void, ThunkConfig<string>>(
    'Note/InitEditCodeData',
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

      const code = getFieldNotePattern<CodePatternKeys>(fields, 'code')

      if (code) {
        dispatch(NotePatternCodeActions.setCode(code.value))
      }

      return true
    }
  )
