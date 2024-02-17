import { type ThunkConfig } from '@app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getPageSelector } from '../selectors/NoteSearchSelectors'
import { NoteSearchActions } from '../slice/NoteSearchSlice'

export const FetchNextPageUserNotes =
  createAsyncThunk<void, void, ThunkConfig<string>>(
    'Note/FetchNextPageUserNotes',
    async (
      _,
      thunkApi
    ) => {
      const {
        getState,
        dispatch,
      } = thunkApi

      const page = getPageSelector(getState())

      dispatch(NoteSearchActions.setPage(page + 1))
    }
  )
