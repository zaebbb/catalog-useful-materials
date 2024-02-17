import { type ThunkConfig } from '@app/providers/StoreProvider'
import {
  getFieldsMakeRequest,
} from '@features/CreateNoteTypePattern/lib/helpers/getFieldsMakeRequest'
import { makeFormData } from '@lib/helpers/makeFormData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  type CreateNoteTypeRequest,
  type CreateNoteTypeResponse,
} from '../types/CreateNoteTypePatternSchema'

export const CreateNoteTypeService =
  createAsyncThunk<CreateNoteTypeResponse, void, ThunkConfig<string>>(
    'CreateNoteType/CreateNoteTypeService',
    async (
      _,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
        getState,
      } = thunkApi

      const state = getState()

      const formData: CreateNoteTypeRequest = {
        code: state.createNoteTypePattern?.values.code ?? '',
        draft: state.createNoteTypePattern?.values.draft ?? false,
        name: state.createNoteTypePattern?.values.name ?? '',
        fields: getFieldsMakeRequest(state.createNoteTypePattern?.values.fields),
      }

      try {
        const makeData = makeFormData<CreateNoteTypeRequest>({
          data: formData,
        })

        const response = await extra.api.post<CreateNoteTypeResponse>(
          '/note-type/create',
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

        return response.data
      } catch (e) {
        return rejectWithValue(e as string)
      }
    }
  )
