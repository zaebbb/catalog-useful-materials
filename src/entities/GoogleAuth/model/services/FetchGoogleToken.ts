import { type ThunkConfig } from '@app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type GoogleAuthGetTokenResponse } from '../types/GoogleAuthTypes'

export const FetchGoogleToken =
  createAsyncThunk<string, void, ThunkConfig<string>>(
    'GoogleAuth/FetchGoogleToken',
    async (
      _,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
      } = thunkApi

      try {
        const response = await extra.api.get<GoogleAuthGetTokenResponse>(
          '/social-auth/google-auth-client-id'
        )

        if (!response.data) {
          throw new Error()
        }

        if (!response.data.success) {
          throw new Error()
        }

        return response.data.success.token
      } catch (e) {
        return rejectWithValue(e as string)
      }
    }
  )
