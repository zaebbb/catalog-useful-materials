import { type ThunkConfig } from '@app/providers/StoreProvider'
import { type UserProfile } from '@entities/User'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ProfileResponse } from '../types/ProfileSchema'

export const FetchProfileData =
  createAsyncThunk<UserProfile, void, ThunkConfig<string>>(
    'ProfileEdit/FetchProfileData',
    async (
      _,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
      } = thunkApi

      try {
        const response = await extra.api.get<ProfileResponse>(
          '/users/profile-data'
        )

        if (!response.data) {
          throw new Error()
        }

        if (!response.data.success) {
          throw new Error()
        }

        return response.data.success
      } catch (e) {
        return rejectWithValue(e as string)
      }
    }
  )
