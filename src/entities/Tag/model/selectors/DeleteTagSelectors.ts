import { type StateSchema } from '@app/providers/StoreProvider'

export const getIsDeletedTagSelector = (
  state: StateSchema
): boolean => state.deleteTag?.isDeleted ?? false
