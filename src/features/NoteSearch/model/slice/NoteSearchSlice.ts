import { type NoteSearchSchema } from '@features/NoteSearch/model/types/NoteSearchSchema'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: NoteSearchSchema = {
  values: {
    description: '',
    page: 0,
  },
}

export const NoteSearchSlice = createSlice({
  name: 'NoteSearchSlice',
  initialState,
  reducers: {
    setDescription: (state, { payload }: PayloadAction<string>) => {
      state.values.description = payload
    },
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.values.page = payload
    },
  },
})

export const {
  actions: NoteSearchActions,
  reducer: NoteSearchReducer,
} = NoteSearchSlice
