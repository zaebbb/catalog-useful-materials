import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode'
import { FetchGetVKAppId } from '../services/FetchGetVKAppId'
import { GetUserData } from '../services/GetUserData'
import { type VKAuthAppId, type VKAuthSchema } from '../types/VKAuthSchema'

const initialState: VKAuthSchema = {
  isLoading: false,
  auth: false,
}

export const VKAuthSlice = createSlice({
  name: 'VKAuthSlice',
  initialState,
  reducers: {
  },
  extraReducers: (builder) =>
    builder
      .addCase(
        FetchGetVKAppId.pending, (state) => {
          state.isLoading = true
        }
      )
      .addCase(
        FetchGetVKAppId.fulfilled, (state, { payload }: PayloadAction<string>) => {
          const tokenDecode: VKAuthAppId = jwtDecode(payload)

          state.appId = Number(tokenDecode.appId)
          state.isLoading = false
        }
      )
      .addCase(
        FetchGetVKAppId.rejected, (state) => {
          state.isLoading = false
        }
      )
      .addCase(
        GetUserData.pending, (state) => {
          state.isLoading = true
        }
      )
      .addCase(
        GetUserData.fulfilled, (state, { payload }: PayloadAction<boolean>) => {
          state.isLoading = false
          state.auth = payload
        }
      )
      .addCase(
        GetUserData.rejected, (state) => {
          state.isLoading = false
        }
      ),
})

export const {
  actions: VKAuthActions,
  reducer: VKAuthReducer,
} = VKAuthSlice
