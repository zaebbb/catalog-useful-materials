import { type ThunkConfig } from '@app/providers/StoreProvider'
import { UserActions } from '@entities/User'
import { makeFormData } from '@lib/helpers/makeFormData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  type GoogleAuthSave,
  type SaveGoogleResponse,
} from '../types/GoogleAuthTypes'

export const SaveGoogleData =
  createAsyncThunk<boolean, GoogleAuthSave, ThunkConfig<string>>(
    'GoogleAuth/SaveGoogleData',
    async (
      data,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
        dispatch,
      } = thunkApi

      try {
        const response = await extra.api.post<SaveGoogleResponse>(
          '/social-auth/google-auth-save',
          makeFormData<GoogleAuthSave>({ data })
        )

        if (!response.data) {
          throw new Error()
        }

        if (!response.data?.success?.auth) {
          throw new Error()
        }

        if (response.data.success.user) {
          dispatch(UserActions.setUserData(response.data.success.user))
        }

        return response.data.success.auth
      } catch (e) {
        return rejectWithValue(e as string)
      }
    }
  )
