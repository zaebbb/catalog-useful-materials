import { type StateSchema } from '@app/providers/StoreProvider'
import { type CategorySchema } from '../types/CategorySchema'

export const getRemotePathSelector =
  (state: StateSchema): string => state.category?.select.allCategoriesPath ?? ''

export const getCurrentElementSelector = (
  state: StateSchema
): CategorySchema['select']['currentCategory'] => state.category?.select.currentCategory
