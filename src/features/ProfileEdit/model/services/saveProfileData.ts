import { type ThunkConfig } from '@app/providers/StoreProvider'
import { MountedUser } from '@entities/User'
import { makeFormData, makeFormFiles } from '@lib/helpers/makeFormData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ProfileResponse } from '../types/ProfileSchema'

export const SaveProfileData =
  createAsyncThunk<ProfileResponse, Files, ThunkConfig<string>>(
    'ProfileEdit/SaveProfileData',
    async (
      files,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
        getState,
        dispatch,
      } = thunkApi

      const state = getState()

      try {
        const file = makeFormFiles(files)[0]
        const response = await extra.api.post<ProfileResponse>(
          '/users/profile-data/edit/',
          makeFormData({
            data: {
              ...state.profileEdit?.user,
              avatar: file,
            },
          }),
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )

        if (!response.data) {
          throw new Error()
        }

        if (response.data.success) {
          dispatch(MountedUser())
        }

        return response.data
      } catch (e) {
        return rejectWithValue(e as string)
      }
    }
  )
