import { type ThunkConfig } from '@app/providers/StoreProvider'
import { makeFormData } from '@lib/helpers/makeFormData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  type FetchEditTagResponse,
} from '../types/EditTagSchema'

export const FetchTagService =
  createAsyncThunk<FetchEditTagResponse, string, ThunkConfig<string>>(
    'EditTag/FetchTagService',
    async (
      code,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
      } = thunkApi

      try {
        const makeData = makeFormData({
          data: {
            code,
          },
        })

        const response = await extra.api.post<FetchEditTagResponse>(
          '/tag/fetch-code',
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
