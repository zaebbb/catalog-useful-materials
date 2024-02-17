import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { FetchUserEditDataService } from '../services/FetchUserEditData'
import { SaveUserEditService } from '../services/SaveUserEditService'
import {
  type FetchUserEditDataResponse,
  type SaveUserEditResponse,
  type UserEditSchema,
} from '../types/UserEditSchema'

const initialState: UserEditSchema = {
  isLoading: true,
  isSave: false,
}

export const EditUserSlice = createSlice({
  name: 'EditUserSlice',
  initialState,
  reducers: {
    setIsAdmin: (state, { payload }: PayloadAction<boolean>) => {
      if (state.values) {
        state.values.isAdmin = payload
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        FetchUserEditDataService.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        FetchUserEditDataService.fulfilled,
        (state, { payload }: PayloadAction<FetchUserEditDataResponse>) => {
          if (payload.success) {
            state.values = payload.success
          }
          state.isLoading = false
        }
      )
      .addCase(
        FetchUserEditDataService.rejected,
        (state) => {
          state.validation = {}
          state.isLoading = false
        }
      )
      .addCase(
        SaveUserEditService.pending,
        (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        SaveUserEditService.fulfilled,
        (state, { payload }: PayloadAction<SaveUserEditResponse>) => {
          if (payload.validation) {
            state.validation = payload.validation
          }

          if (payload.success?.isSave) {
            state.isSave = true
          }
        }
      )
      .addCase(
        SaveUserEditService.rejected,
        (state) => {
          state.validation = {}
          state.isLoading = false
        }
      )
  },
})

export const {
  actions: EditUserActions,
  reducer: EditUserReducer,
} = EditUserSlice
