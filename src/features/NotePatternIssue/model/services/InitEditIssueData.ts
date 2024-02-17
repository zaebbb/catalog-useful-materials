import { type ThunkConfig } from '@app/providers/StoreProvider'
import { type FieldNoteItem, getFieldNotePattern } from '@entities/Notes'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { NotePatternIssueActions } from '../slice/NotePatternIssueSlice'
import { type IssuePatternKeys } from '../types/NotePatternIssueSchema'

export const InitEditIssueData =
  createAsyncThunk<boolean, void, ThunkConfig<string>>(
    'Note/InitEdiIssueData',
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

      const imageIssue = getFieldNotePattern<IssuePatternKeys>(fields, 'imageIssue')
      const linkIssue = getFieldNotePattern<IssuePatternKeys>(fields, 'linkIssue')

      if (imageIssue) {
        dispatch(NotePatternIssueActions.setRemoteImage(imageIssue.value))
        dispatch(NotePatternIssueActions.setViewImage())
      }

      if (linkIssue) {
        dispatch(NotePatternIssueActions.setLinkIssue(linkIssue.value))
        dispatch(NotePatternIssueActions.setViewLink())
      }

      return true
    }
  )
