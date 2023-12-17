import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type CategorySchema } from '../types/CategorySchema'

const initialState: CategorySchema = {
  select: {
    allCategoriesPath: '/remote-data/categories-list',
  },
}

export const CategorySlice = createSlice(({
  name: 'CategorySlice',
  initialState,
  reducers: {
    setCurrentCategory: (state, { payload }: PayloadAction<SelectFieldOption<string>>) => {
      state.select.currentCategory = payload
    },
  },
}))

export const {
  actions: CategoryActions,
  reducer: CategoryReducer,
} = CategorySlice
