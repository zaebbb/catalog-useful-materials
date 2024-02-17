import { type ThunkConfig } from '@app/providers/StoreProvider'
import { makeFormData } from '@lib/helpers/makeFormData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type DeleteTagResponse } from '../types/DeleteTagSchema'

export const DeleteTagService =
  createAsyncThunk<DeleteTagResponse, number, ThunkConfig<string>>(
    'DeleteTag/DeleteTagService',
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

        const response = await extra.api.post<DeleteTagResponse>(
          '/tag/delete',
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
