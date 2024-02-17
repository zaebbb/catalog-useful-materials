import { type ThunkConfig } from '@app/providers/StoreProvider'
import { makeFormData } from '@lib/helpers/makeFormData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type DeleteCategoryResponse } from '../types/DeleteCategorySchema'

export const DeleteCategoryService =
  createAsyncThunk<DeleteCategoryResponse, number, ThunkConfig<string>>(
    'DeleteCategory/DeleteCategoryService',
    async (
      id,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
      } = thunkApi

      try {
        const makeData = makeFormData({
          data: {
            id,
          },
        })

        const response = await extra.api.post<DeleteCategoryResponse>(
          '/category/delete',
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
