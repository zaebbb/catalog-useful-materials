import { type ThunkConfig } from '@app/providers/StoreProvider'
import { makeFormData } from '@lib/helpers/makeFormData'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  type EditCategory,
  type EditCategoryResponse,
} from '../types/EditCategorySchema'

export const EditCategoryService =
  createAsyncThunk<EditCategoryResponse, void, ThunkConfig<string>>(
    'CreateCategory/EditCategoryService',
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

      const formData: EditCategory = {
        id: state.editCategory?.values.id ?? 0,
        draft: state.editCategory?.values.draft ?? false,
        name: state.editCategory?.values.name ?? '',
      }

      try {
        const makeData = makeFormData<EditCategory>({
          data: formData,
        })

        const response = await extra.api.post<EditCategoryResponse>(
          '/category/edit',
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
