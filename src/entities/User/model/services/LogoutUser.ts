import { type ThunkConfig } from '@app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const LogoutUser =
  createAsyncThunk<void, void, ThunkConfig<string>>(
    'User/MountedUser',
    async (
      _,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
      } = thunkApi

      try {
        await extra.api.get('/users/logout')
      } catch (e) {
        return rejectWithValue(e as string)
      }
    }
  )
