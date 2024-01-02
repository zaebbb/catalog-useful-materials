import { type ThunkConfig } from '@app/providers/StoreProvider'
import { UserActions } from '@entities/User'
import { makeFormData } from '@lib/helpers/makeFormData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type SaveVkResponse, type VkGetDataRequest } from '../types/VKAuthSchema'

export const GetUserData =
  createAsyncThunk<boolean, VkGetDataRequest, ThunkConfig<string>>(
    'GoogleAuth/SaveGoogleData',
    async (
      tokenData,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
        dispatch,
      } = thunkApi

      try {
        const response = await extra.api.post<SaveVkResponse>(
          '/social-auth/vk-get-user-data',
          makeFormData<VkGetDataRequest>({
            data: {
              token: tokenData.token,
              uuid: tokenData.uuid,
            },
          })
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
