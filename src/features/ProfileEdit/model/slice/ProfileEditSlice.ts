import { type UserProfile } from '@entities/User'
import { SaveProfileData } from '@features/ProfileEdit/model/services/saveProfileData'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { FetchProfileData } from '../services/fetchProfileData'
import { type ProfileResponse, type ProfileSchema } from '../types/ProfileSchema'

const initialState: ProfileSchema = {
  isLoading: false,
  user: {},
  validation: {},
  _mounted: false,
}

export const ProfileEditSlice = createSlice({
  name: 'ProfileEditSlice',
  initialState,
  reducers: {
    setName: (state, { payload }: PayloadAction<string>) => {
      state.user.name = payload
    },
    setSurname: (state, { payload }: PayloadAction<string>) => {
      state.user.surname = payload
    },
    setPatronymic: (state, { payload }: PayloadAction<string>) => {
      state.user.patronymic = payload
    },
    mountedProfileData: (state, { payload }: PayloadAction<UserProfile>) => {
      state.user = payload
      state._mounted = true
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        FetchProfileData.pending, (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        FetchProfileData.fulfilled, (state, { payload }: PayloadAction<UserProfile>) => {
          state.isLoading = false
          state.user = payload
        })
      .addCase(
        FetchProfileData.rejected, (state) => {
          state.isLoading = false
        })
      .addCase(
        SaveProfileData.pending, (state) => {
          state.validation = {}
          state.isLoading = true
        }
      )
      .addCase(
        SaveProfileData.fulfilled, (state, { payload }: PayloadAction<ProfileResponse>) => {
          if (payload.success) {
            state.user = payload.success
          }

          if (payload.validation) {
            state.validation = payload.validation
          }

          state.isLoading = false
        })
      .addCase(
        SaveProfileData.rejected, (state) => {
          state.isLoading = false
        })
  },
})

export const {
  actions: ProfileEditActions,
  reducer: ProfileEditReducer,
} = ProfileEditSlice
