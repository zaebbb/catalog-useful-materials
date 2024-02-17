import { CreateTagService } from '@features/CreateTag/model/services/CreateTagService'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type CreateTagResponse, type CreateTagSchema } from '../types/CreateTagSchema'

const initialState: CreateTagSchema = {
  isLoading: false,
  values: {
    name: '',
    code: '',
    draft: false,
  },
  isCreated: false,
}

export const CreateTagSlice = createSlice({
  name: 'CreateTagSlice',
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
        CreateTagService.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        CreateTagService.fulfilled,
        (state, { payload }: PayloadAction<CreateTagResponse>) => {
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
        CreateTagService.rejected,
        (state) => {
          state.validation = {}
          state.isLoading = false
        }
      )
  },
})

export const {
  actions: CreateTagActions,
  reducer: CreateTagReducer,
} = CreateTagSlice
