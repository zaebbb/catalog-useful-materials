import { EditTagService } from '@features/EditTag/model/services/EditTagService'
import { FetchTagService } from '@features/EditTag/model/services/FetchEditTag'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  type EditTagResponse,
  type EditTagSchema,
  type FetchEditTagResponse,
} from '../types/EditTagSchema'

const initialState: EditTagSchema = {
  isLoading: true,
  values: {
    id: 0,
    name: '',
    draft: false,
  },
  isUpdated: false,
}

export const EditTagSlice = createSlice({
  name: 'EditTagSlice',
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
        FetchTagService.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        FetchTagService.fulfilled,
        (state, { payload }: PayloadAction<FetchEditTagResponse>) => {
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
        FetchTagService.rejected,
        (state) => {
          state.validation = {}
          state.isLoading = false
        }
      )
      .addCase(
        EditTagService.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        EditTagService.fulfilled,
        (state, { payload }: PayloadAction<EditTagResponse>) => {
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
        EditTagService.rejected,
        (state) => {
          state.validation = {}
          state.isLoading = false
        }
      )
  },
})

export const {
  actions: EditTagActions,
  reducer: EditTagReducer,
} = EditTagSlice
