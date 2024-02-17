import { type ThunkConfig } from '@app/providers/StoreProvider'
import { makeFormData } from '@lib/helpers/makeFormData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  type SaveUserEditResponse,
  type UserEditValues,
} from '../types/UserEditSchema'

export const SaveUserEditService =
  createAsyncThunk<SaveUserEditResponse, void, ThunkConfig<string>>(
    'EditUser/SaveUserEditService',
    async (
      _,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
        getState,
      } = thunkApi

      try {
        const state = getState()

        const makeData = makeFormData<UserEditValues>({
          data: {
            id: state.userEdit?.values?.id ?? 0,
            email: state.userEdit?.values?.email ?? '',
            username: state.userEdit?.values?.username ?? '',
            isAdmin: state.userEdit?.values?.isAdmin ?? false,
            isUser: state.userEdit?.values?.isUser ?? false,
          },
        })

        const response = await extra.api.post<SaveUserEditResponse>(
          '/users/admin/user/edit',
          makeData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )

        if (!response.data) {
          throw new Error()
        }

        return response.data
      } catch (e) {
        return rejectWithValue(e as string)
      }
    }
  )
