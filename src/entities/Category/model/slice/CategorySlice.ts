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
    setSelectedCategory: (state, { payload }: PayloadAction<SelectFieldOption<string>>) => {
      state.select.selected = payload
    },
    clearCategory: (state) => {
      state.select.currentCategory = undefined
      state.select.selected = undefined
    },
  },
}))

export const {
  actions: CategoryActions,
  reducer: CategoryReducer,
} = CategorySlice
