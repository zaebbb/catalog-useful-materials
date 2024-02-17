import { type StateSchema } from '@app/providers/StoreProvider'

export const getIsDeletedCategorySelector = (
  state: StateSchema
): boolean => state.deleteCategory?.isDeleted ?? false
