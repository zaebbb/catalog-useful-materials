import { type ThunkConfig } from '@app/providers/StoreProvider'
import { makeFormData } from '@lib/helpers/makeFormData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  type EditTag,
  type EditTagResponse,
} from '../types/EditTagSchema'

export const EditTagService =
  createAsyncThunk<EditTagResponse, void, ThunkConfig<string>>(
    'CreateTag/EditTagService',
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

      const formData: EditTag = {
        id: state.editTag?.values.id ?? 0,
        draft: state.editTag?.values.draft ?? false,
        name: state.editTag?.values.name ?? '',
      }

      try {
        const makeData = makeFormData<EditTag>({
          data: formData,
        })

        const response = await extra.api.post<EditTagResponse>(
          '/tag/edit',
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
