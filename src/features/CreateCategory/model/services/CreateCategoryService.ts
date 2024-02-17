import { type ThunkConfig } from '@app/providers/StoreProvider'
import { makeFormData } from '@lib/helpers/makeFormData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type CreateCategory, type CreateCategoryResponse } from '../types/CreateCategorySchema'

export const CreateCategoryService =
  createAsyncThunk<CreateCategoryResponse, void, ThunkConfig<string>>(
    'CreateCategory/CreateCategoryService',
    async (
      _,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
        getState,
      } = thunkApi

      const state = getState()

      const formData: CreateCategory = {
        code: state.createCategory?.values.code ?? '',
        draft: state.createCategory?.values.draft ?? false,
        name: state.createCategory?.values.name ?? '',
      }

      try {
        const makeData = makeFormData<CreateCategory>({
          data: formData,
        })

        const response = await extra.api.post<CreateCategoryResponse>(
          '/category/create',
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
