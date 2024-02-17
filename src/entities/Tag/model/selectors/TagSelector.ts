import { type StateSchema } from '@app/providers/StoreProvider'
import { type TagSchema } from '../types/TagSchema'

export const getRemotePathSelector =
  (state: StateSchema): string => state.tag?.select.allTagsPath ?? ''

export const getCurrentElementSelector = (
  state: StateSchema
): TagSchema['select']['currentTags'] => state.tag?.select.currentTags

export const getCurrentTagsIdsSelector = (
  state: StateSchema
): TagSchema['select']['currentTagsIds'] => state.tag?.select.currentTagsIds

export const getSelectedSelector = (
  state: StateSchema
): TagSchema['select']['selected'] => state.tag?.select.selected
