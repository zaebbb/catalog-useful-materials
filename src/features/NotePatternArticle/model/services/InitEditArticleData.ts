import { type ThunkConfig } from '@app/providers/StoreProvider'
import { type FieldNoteItem, getFieldNotePattern } from '@entities/Notes'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  NotePatternArticleActions,
} from '../slice/NotePatternArticleSlice'
import { type ArticlePatternKeys } from '../types/NotePatternArticleSchema'

export const InitEditArticleData =
  createAsyncThunk<boolean, void, ThunkConfig<string>>(
    'Note/InitEditArticleData',
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

      const linkNote = getFieldNotePattern<ArticlePatternKeys>(fields, 'linkNote')
      const linkVideo = getFieldNotePattern<ArticlePatternKeys>(fields, 'linkVideo')
      const image = getFieldNotePattern<ArticlePatternKeys>(fields, 'image')

      if (linkNote) {
        dispatch(NotePatternArticleActions.setLinkNote(linkNote.value))
      }

      if (linkVideo) {
        dispatch(NotePatternArticleActions.setLinkVideo(linkVideo.value))
      }

      if (image) {
        dispatch(NotePatternArticleActions.setRemoteImage(image.value))
      }

      return true
    }
  )
