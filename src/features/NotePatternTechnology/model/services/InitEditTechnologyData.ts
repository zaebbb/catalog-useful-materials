import { type ThunkConfig } from '@app/providers/StoreProvider'
import { type FieldNoteItem, getFieldNotePattern } from '@entities/Notes'
import { createAsyncThunk } from '@reduxjs/toolkit'

import {
  NotePatternTechnologyActions,
} from '../slice/NotePatternTechnologySlice'
import {
  type TechnologyPatternKeys,
} from '../types/NotePatternTechnologySchema'

export const InitEditTechnologyData =
  createAsyncThunk<boolean, void, ThunkConfig<string>>(
    'Note/InitEditTechnologyData',
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

      const linkDocs = getFieldNotePattern<TechnologyPatternKeys>(fields, 'linkDocs')
      const linkInstall = getFieldNotePattern<TechnologyPatternKeys>(fields, 'linkInstall')
      const linkTechnology = getFieldNotePattern<TechnologyPatternKeys>(fields, 'linkTechnology')
      const icon = getFieldNotePattern<TechnologyPatternKeys>(fields, 'icon')

      if (linkDocs) {
        dispatch(NotePatternTechnologyActions.setLinkDocs(linkDocs.value))
      }

      if (linkInstall) {
        dispatch(NotePatternTechnologyActions.setLinkInstall(linkInstall.value))
      }

      if (linkTechnology) {
        dispatch(NotePatternTechnologyActions.setLinkTechnology(linkTechnology.value))
      }

      if (icon) {
        dispatch(NotePatternTechnologyActions.setRemoteIcon(icon.value))
      }

      return true
    }
  )
