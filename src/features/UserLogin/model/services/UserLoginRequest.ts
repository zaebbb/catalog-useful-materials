import { type ThunkConfig } from '@app/providers/StoreProvider'
import { UserActions } from '@entities/User'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type UserLoginRequestData, type UserLoginResponse } from '../types/UserLoginSchema'

export const UserLoginRequest =
  createAsyncThunk<UserLoginResponse, UserLoginRequestData, ThunkConfig<string>>(
    'UserLogin/UserLoginRequest',
    async (
      requestData,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
        dispatch,
      } = thunkApi

      try {
        const response = await extra.api.post<UserLoginResponse>(
          '/users/login',
          requestData
        )

        if (!response.data) {
          throw new Error()
        }

        if (response.data.success) {
          dispatch(UserActions.setUserData(response.data.success))
        }

        return response.data
      } catch (e) {
        return rejectWithValue(e as string)
      }
    }
  )
