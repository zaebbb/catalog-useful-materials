import { type ThunkConfig } from '@app/providers/StoreProvider'
import { makeFormData } from '@lib/helpers/makeFormData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type FetchUserEditDataResponse } from '../types/UserEditSchema'

export const FetchUserEditDataService =
  createAsyncThunk<FetchUserEditDataResponse, string, ThunkConfig<string>>(
    'EditUser/FetchUserService',
    async (
      email,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
      } = thunkApi

      try {
        const makeData = makeFormData({
          data: {
            email,
          },
        })

        const response = await extra.api.post<FetchUserEditDataResponse>(
          '/users/admin/user/fetch',
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
