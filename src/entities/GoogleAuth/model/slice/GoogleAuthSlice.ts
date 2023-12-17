import { type AuthData } from '@integrations/google-auth'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode'
import { FetchGoogleToken } from '../services/FetchGoogleToken'
import { SaveGoogleData } from '../services/SaveGoogleData'
import {
  type AuthMode,
  type GoogleAuthSchema,
  type GoogleAuthToken,
} from '../types/GoogleAuthTypes'

const initialState: GoogleAuthSchema = {
  isLoading: false,
  mode: 'login',
  token: '',
  auth: false,
}

export const GoogleAuthSlice = createSlice({
  name: 'GoogleAuthSlice',
  initialState,
  reducers: {
    setMode: (state, { payload }: PayloadAction<AuthMode>) => {
      state.mode = payload
    },
    setToken: (state, { payload }: PayloadAction<string>) => {
      const tokenDecode: GoogleAuthToken = jwtDecode(payload)

      state.token = tokenDecode.token
    },
    setUserData: (state, { payload }: PayloadAction<AuthData>) => {
      state.user = payload
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(
        FetchGoogleToken.pending, (state) => {
          state.isLoading = true
        }
      )
      .addCase(
        FetchGoogleToken.fulfilled, (state, { payload }: PayloadAction<string>) => {
          const tokenDecode: GoogleAuthToken = jwtDecode(payload)

          state.token = tokenDecode.token
          state.isLoading = false
        }
      )
      .addCase(
        FetchGoogleToken.rejected, (state) => {
          state.isLoading = false
        }
      )
      .addCase(
        SaveGoogleData.pending, (state) => {
          state.isLoading = true
        }
      )
      .addCase(
        SaveGoogleData.fulfilled, (state, { payload }: PayloadAction<boolean>) => {
          state.isLoading = false
          state.auth = payload
        }
      )
      .addCase(
        SaveGoogleData.rejected, (state) => {
          state.isLoading = false
        }
      ),
})

export const {
  actions: GoogleAuthActions,
  reducer: GoogleAuthReducer,
} = GoogleAuthSlice
