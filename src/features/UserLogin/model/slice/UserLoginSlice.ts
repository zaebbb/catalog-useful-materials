import { UserLoginRequest } from '@features/UserLogin/model/services/UserLoginRequest'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
  type UserLoginResponse,
  type UserLoginSchema,
} from '../types/UserLoginSchema'

const initialState: UserLoginSchema = {
  email: '',
  password: '',
  isLoading: false,
  validation: {},
}

export const UserLoginSlice = createSlice({
  name: 'UserLoginSlice',
  initialState,
  reducers: {
    setEmail: (state, { payload }: PayloadAction<string>) => {
      state.email = payload
    },
    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.password = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(UserLoginRequest.pending, (state) => {
        state.validation = {}
        state.isLoading = true
      })
      .addCase(
        UserLoginRequest.fulfilled,
        (state, { payload }: PayloadAction<UserLoginResponse>) => {
          state.isLoading = false

          if (payload.validation) {
            state.validation = payload.validation
          }
        }
      )
      .addCase(UserLoginRequest.rejected, (state, action) => {
        state.isLoading = false
      })
  },
})

export const {
  actions: UserLoginActions,
  reducer: UserLoginReducer,
} = UserLoginSlice
