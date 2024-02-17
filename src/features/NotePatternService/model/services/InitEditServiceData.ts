import { type ThunkConfig } from '@app/providers/StoreProvider'
import { type FieldNoteItem, getFieldNotePattern } from '@entities/Notes'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  NotePatternServiceActions,
} from '../slice/NotePatternServiceSlice'
import { type ServicePatternKeys } from '../types/NotePatternServiceSchema'

export const InitEditServiceData =
  createAsyncThunk<boolean, void, ThunkConfig<string>>(
    'Note/InitEditServiceData',
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

      const linkService = getFieldNotePattern<ServicePatternKeys>(fields, 'linkService')

      if (linkService) {
        dispatch(NotePatternServiceActions.setLinkService(linkService.value))
      }

      return true
    }
  )
