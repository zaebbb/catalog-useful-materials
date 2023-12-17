import { type ThunkConfig } from '@app/providers/StoreProvider'
import {
  type NoteDetailsResponse,
} from '@entities/Notes/model/types/NotesDetailsSchema'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const FetchNoteData =
  createAsyncThunk<NoteDetailsResponse, string, ThunkConfig<string>>(
    'Notes/FetchNoteData',
    async (
      id,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
      } = thunkApi

      try {
        const response = await extra.api.get<NoteDetailsResponse>(
          `/notes/notes-details/?id=${id}`
        )

        if (!response.data) {
          throw new Error()
        }

        return response.data
      } catch (e) {
        return rejectWithValue(e as string)
      }
    }
  )
