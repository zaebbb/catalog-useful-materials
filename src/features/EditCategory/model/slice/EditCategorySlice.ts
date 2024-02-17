import { EditCategoryService } from '@features/EditCategory/model/services/EditCategoryService'
import { FetchCategoryService } from '@features/EditCategory/model/services/FetchEditCategory'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  type EditCategoryResponse,
  type EditCategorySchema,
  type FetchEditCategoryResponse,
} from '../types/EditCategorySchema'

const initialState: EditCategorySchema = {
  isLoading: true,
  values: {
    id: 0,
    name: '',
    draft: false,
  },
  isUpdated: false,
}

export const EditCategorySlice = createSlice({
  name: 'EditCategorySlice',
  initialState,
  reducers: {
    setName: (state, { payload }: PayloadAction<string>) => {
      state.values.name = payload
    },
    setDraft: (state, { payload }: PayloadAction<boolean>) => {
      state.values.draft = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        FetchCategoryService.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        FetchCategoryService.fulfilled,
        (state, { payload }: PayloadAction<FetchEditCategoryResponse>) => {
          state.isLoading = false

          if (payload.success) {
            const {
              name,
              draft,
              id,
            } = payload.success

            state.values.id = id
            state.values.name = name
            state.values.draft = draft
          }
        }
      )
      .addCase(
        FetchCategoryService.rejected,
        (state) => {
          state.validation = {}
          state.isLoading = false
        }
      )
      .addCase(
        EditCategoryService.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        EditCategoryService.fulfilled,
        (state, { payload }: PayloadAction<EditCategoryResponse>) => {
          state.isLoading = false

          if (payload.validation) {
            state.validation = payload.validation
          }

          if (payload.success) {
            state.isUpdated = payload.success.isUpdated
          }
        }
      )
      .addCase(
        EditCategoryService.rejected,
        (state) => {
          state.validation = {}
          state.isLoading = false
        }
      )
  },
})

export const {
  actions: EditCategoryActions,
  reducer: EditCategoryReducer,
} = EditCategorySlice
