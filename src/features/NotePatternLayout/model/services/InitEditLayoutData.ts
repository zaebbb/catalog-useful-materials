import { type ThunkConfig } from '@app/providers/StoreProvider'
import { type FieldNoteItem, getFieldNotePattern } from '@entities/Notes'
import { createAsyncThunk } from '@reduxjs/toolkit'

import {
  NotePatternLayoutActions,
} from '../slice/NotePatternLayoutSlice'
import { type LayoutPatternKeys } from '../types/NotePatternLayoutSchema'

export const InitEditLayoutData =
  createAsyncThunk<boolean, void, ThunkConfig<string>>(
    'Note/InitEditLayoutData',
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

      const imageLayout = getFieldNotePattern<LayoutPatternKeys>(fields, 'imageLayout')
      const linkLayout = getFieldNotePattern<LayoutPatternKeys>(fields, 'linkLayout')

      if (imageLayout) {
        dispatch(NotePatternLayoutActions.setRemoteImage(imageLayout.value))
      }

      if (linkLayout) {
        dispatch(NotePatternLayoutActions.setLinkLayout(linkLayout.value))
      }

      return true
    }
  )
