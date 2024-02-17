import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { CreateCategoryService } from '../services/CreateCategoryService'
import {
  type CreateCategoryResponse,
  type CreateCategorySchema,
} from '../types/CreateCategorySchema'

const initialState: CreateCategorySchema = {
  isLoading: false,
  values: {
    name: '',
    code: '',
    draft: false,
  },
  isCreated: false,
}

export const CreateCategorySlice = createSlice({
  name: 'CreateCategorySlice',
  initialState,
  reducers: {
    setName: (state, { payload }: PayloadAction<string>) => {
      state.values.name = payload
    },
    setCode: (state, { payload }: PayloadAction<string>) => {
      state.values.code = payload

      if (state?.validation?.code) {
        state.validation.code = ''
      }
    },
    setDraft: (state, { payload }: PayloadAction<boolean>) => {
      state.values.draft = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        CreateCategoryService.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        CreateCategoryService.fulfilled,
        (state, { payload }: PayloadAction<CreateCategoryResponse>) => {
          state.isLoading = false

          if (payload.validation) {
            state.validation = payload.validation
          }

          if (payload.success?.isCreated) {
            state.isCreated = true
          }
        }
      )
      .addCase(
        CreateCategoryService.rejected,
        (state) => {
          state.validation = {}
          state.isLoading = false
        }
      )
  },
})

export const {
  actions: CreateCategoryActions,
  reducer: CreateCategoryReducer,
} = CreateCategorySlice
