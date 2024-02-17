import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { DeleteTagService } from '../services/DeleteTagService'
import { type DeleteTagResponse, type DeleteTagSchema } from '../types/DeleteTagSchema'

const initialState: DeleteTagSchema = {
  isDeleted: false,
}

export const DeleteTagSlice = createSlice({
  name: 'DeleteTagSlice',
  initialState,
  reducers: {
    setDeleted: (state, { payload }: PayloadAction<boolean>) => {
      state.isDeleted = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        DeleteTagService.pending,
        (state) => {
          state.isDeleted = false
        }
      )
      .addCase(
        DeleteTagService.fulfilled,
        (state, { payload }: PayloadAction<DeleteTagResponse>) => {
          if (payload.success?.isDeleted) {
            state.isDeleted = true
          }
        }
      )
      .addCase(
        DeleteTagService.rejected,
        (state) => {
          state.isDeleted = false
        }
      )
  },
})

export const {
  actions: DeleteTagActions,
  reducer: DeleteTagReducer,
} = DeleteTagSlice
