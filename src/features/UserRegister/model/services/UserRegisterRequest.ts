import { type ThunkConfig } from '@app/providers/StoreProvider'
import { UserActions } from '@entities/User'
import { makeFormData } from '@lib/helpers/makeFormData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  type UserRegisterRequestData,
  type UserRegisterResponse,
} from '../types/UserRegisterSchema'

export const UserRegisterRequest =
  createAsyncThunk<UserRegisterResponse, void, ThunkConfig<string>>(
    'UserRegister/UserRegisterRequest',
    async (
      _,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
        dispatch,
        getState,
      } = thunkApi

      const state = getState()

      try {
        const response = await extra.api.post<UserRegisterResponse>(
          '/users/register',
          makeFormData<UserRegisterRequestData>({
            data: {
              username: state.userRegister?.values.username ?? '',
              userConsent: state.userRegister?.values.userConsent ?? false,
              email: state.userRegister?.values.email ?? '',
              password: state.userRegister?.values.password ?? '',
              repeatPassword: state.userRegister?.values.repeatPassword ?? '',
            },
          })
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
