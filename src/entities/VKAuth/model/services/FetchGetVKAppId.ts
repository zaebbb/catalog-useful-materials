import { type ThunkConfig } from '@app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type VKAuthGetTokenResponse } from '../types/VKAuthSchema'

export const FetchGetVKAppId =
  createAsyncThunk<string, void, ThunkConfig<string>>(
    'VKAuth/FetchGetVKAppId',
    async (
      _,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
      } = thunkApi

      try {
        const response = await extra.api.get<VKAuthGetTokenResponse>(
          '/social-auth/vk-get-app-id'
        )

        if (!response.data) {
          throw new Error()
        }

        if (!response.data.success) {
          throw new Error()
        }

        return response.data.success.appId
      } catch (e) {
        return rejectWithValue(e as string)
      }
    }
  )
