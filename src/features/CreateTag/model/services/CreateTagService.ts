import { type ThunkConfig } from '@app/providers/StoreProvider'
import { makeFormData } from '@lib/helpers/makeFormData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type CreateTag, type CreateTagResponse } from '../types/CreateTagSchema'

export const CreateTagService =
  createAsyncThunk<CreateTagResponse, void, ThunkConfig<string>>(
    'CreateTag/CreateTagService',
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

      const formData: CreateTag = {
        code: state.createTag?.values.code ?? '',
        draft: state.createTag?.values.draft ?? false,
        name: state.createTag?.values.name ?? '',
      }

      try {
        const makeData = makeFormData<CreateTag>({
          data: formData,
        })

        const response = await extra.api.post<CreateTagResponse>(
          '/tag/create',
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
