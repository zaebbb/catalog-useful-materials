import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { DeleteCategoryService } from '../services/DeleteCategoryService'
import {
  type DeleteCategoryResponse,
  type DeleteCategorySchema,
} from '../types/DeleteCategorySchema'

const initialState: DeleteCategorySchema = {
  isDeleted: false,
}

export const DeleteCategorySlice = createSlice({
  name: 'DeleteCategorySlice',
  initialState,
  reducers: {
    setDeleted: (state, { payload }: PayloadAction<boolean>) => {
      state.isDeleted = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        DeleteCategoryService.pending,
        (state) => {
          state.isDeleted = false
        }
      )
      .addCase(
        DeleteCategoryService.fulfilled,
        (state, { payload }: PayloadAction<DeleteCategoryResponse>) => {
          if (payload.success?.isDeleted) {
            state.isDeleted = true
          }
        }
      )
      .addCase(
        DeleteCategoryService.rejected,
        (state) => {
          state.isDeleted = false
        }
      )
  },
})

export const {
  actions: DeleteCategoryActions,
  reducer: DeleteCategoryReducer,
} = DeleteCategorySlice
