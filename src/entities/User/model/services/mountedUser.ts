import { type ThunkConfig } from '@app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { STATUS_CODE_FORBIDDEN, STATUS_CODE_SUCCESS } from '../../../../shared/api/axiosApi'
import { UserActions } from '../slice/UserSlice'
import { type UserCheckResponse } from '../types/UserSchema'

export const MountedUser =
  createAsyncThunk<void, void, ThunkConfig<string>>(
    'User/MountedUser',
    async (
      _,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
        dispatch,
      } = thunkApi

      try {
        const response = await extra.api.post<UserCheckResponse>('/users/check')

        if (!response.data) {
          throw new Error()
        }

        if (response.status === STATUS_CODE_FORBIDDEN) {
          dispatch(UserActions.userUnauthorized())
        }

        if (response.status === STATUS_CODE_SUCCESS && response.data?.success?.user) {
          dispatch(UserActions.userAuthorized(response.data.success.user))
        }
      } catch (e) {
        return rejectWithValue(e as string)
      }
    }
  )
