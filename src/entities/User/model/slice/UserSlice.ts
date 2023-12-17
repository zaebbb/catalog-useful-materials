import { type UserData, type UserSchema } from '@entities/User/model/types/UserSchema'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: UserSchema = {
  user: undefined,
  _mounted: false,
  isLoading: true,
}

export const UserSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload
      state._mounted = true
      state.isLoading = false
    },
    userAuthorized: (state, action: PayloadAction<UserData>) => {
      state.isLoading = false
      state._mounted = true
      state.user = action.payload
    },
    userUnauthorized: (state) => {
      state.isLoading = false
      state._mounted = false
    },
    exitAccount: (state) => {
      state.isLoading = false
      state._mounted = false
      state.user = undefined
    },
    setMounted: (state, { payload }: PayloadAction<boolean>) => {
      state._mounted = payload
      state.isLoading = false
    },
  },
})

export const {
  actions: UserActions,
  reducer: UserReducer,
} = UserSlice
