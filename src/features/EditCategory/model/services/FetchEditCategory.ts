import { type ThunkConfig } from '@app/providers/StoreProvider'
import { makeFormData } from '@lib/helpers/makeFormData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  type FetchEditCategoryResponse,
} from '../types/EditCategorySchema'

export const FetchCategoryService =
  createAsyncThunk<FetchEditCategoryResponse, string, ThunkConfig<string>>(
    'EditCategory/FetchCategoryService',
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

        const response = await extra.api.post<FetchEditCategoryResponse>(
          '/category/fetch-code',
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
