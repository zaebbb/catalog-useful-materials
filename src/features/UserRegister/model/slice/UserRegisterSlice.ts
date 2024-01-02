import { type UserLoginResponse } from '@features/UserLogin/model/types/UserLoginSchema'
import { UserRegisterRequest } from '@features/UserRegister/model/services/UserRegisterRequest'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type UserRegisterSchema } from '../types/UserRegisterSchema'

const initialState: UserRegisterSchema = {
  values: {
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
    userConsent: false,
  },
  isLoading: false,
}

export const UserRegisterSlice = createSlice({
  name: 'UserRegisterSlice',
  initialState,
  reducers: {
    setUsername: (state, { payload }: PayloadAction<string>) => {
      state.values.username = payload
    },
    setEmail: (state, { payload }: PayloadAction<string>) => {
      state.values.email = payload
    },
    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.values.password = payload
    },
    setRepeatPassword: (state, { payload }: PayloadAction<string>) => {
      state.values.repeatPassword = payload
    },
    setUserConsent: (state, { payload }: PayloadAction<boolean>) => {
      state.values.userConsent = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(UserRegisterRequest.pending, (state) => {
        state.validation = {}
        state.isLoading = true
      })
      .addCase(
        UserRegisterRequest.fulfilled,
        (state, { payload }: PayloadAction<UserLoginResponse>) => {
          state.isLoading = false

          if (payload.validation) {
            state.validation = payload.validation
          }
        }
      )
      .addCase(UserRegisterRequest.rejected, (state, action) => {
        state.isLoading = false
      })
  },
})

export const {
  actions: UserRegisterActions,
  reducer: UserRegisterReducer,
} = UserRegisterSlice
