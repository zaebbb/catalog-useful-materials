import { type ThunkConfig } from '@app/providers/StoreProvider'
import { NoteBaseFieldsActions } from '@entities/Notes'
import { NotesTypesActions } from '@entities/NotesTypes'

import { makeFormData } from '@lib/helpers/makeFormData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  type FetchNotePatternCustomFieldsRequest,
  type FetchNotePatternCustomResponse,
} from '../types/NotePatternCustomSchema'

export const FetchNoteTypeFieldsService =
  createAsyncThunk<FetchNotePatternCustomResponse, void, ThunkConfig<string>>(
    'Note/FetchNoteTypeFieldsService',
    async (
      _,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
        dispatch,
        getState,
      } = thunkApi

      const state = getState()

      const formData: FetchNotePatternCustomFieldsRequest = {
        id: state.notesTypes?.currentNoteType?.id ?? 0,
      }

      try {
        const makeData = makeFormData<FetchNotePatternCustomFieldsRequest>({
          data: formData,
        })

        const response = await extra.api.post<FetchNotePatternCustomResponse>(
          '/note-type/fetch-custom-fields',
          makeData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )

        if (!response.data) {
          throw new Error()
        }

        if (response.data.validation) {
          dispatch(NoteBaseFieldsActions.setValidation(response.data.validation))
          dispatch(NotesTypesActions.setValidation(response.data.validation.typeId ?? ''))
        }

        dispatch(NoteBaseFieldsActions.setIsLoading(false))
        dispatch(NotesTypesActions.setIsLoading(false))

        return response.data
      } catch (e) {
        return rejectWithValue(e as string)
      }
    }
  )
