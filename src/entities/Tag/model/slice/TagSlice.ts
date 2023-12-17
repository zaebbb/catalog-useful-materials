import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type TagSchema } from '../types/TagSchema'

const initialState: TagSchema = {
  select: {
    allTagsPath: '/remote-data/tags-list',
  },
}

export const TagSlice = createSlice(({
  name: 'TagSlice',
  initialState,
  reducers: {
    setTags: (state, { payload }: PayloadAction<SelectItems<string>>) => {
      state.select.currentTags = payload
    },
    setTagsIds: (state, { payload }: PayloadAction<number[]>) => {
      state.select.currentTagsIds = payload
    },
  },
}))

export const {
  actions: TagActions,
  reducer: TagReducer,
} = TagSlice
