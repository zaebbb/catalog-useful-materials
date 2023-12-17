import { type StateSchema } from '@app/providers/StoreProvider'
import { type TagSchema } from '../types/TagSchema'

export const getRemotePathSelector =
  (state: StateSchema): string => state.tag?.select.allTagsPath ?? ''

export const getCurrentElementSelector = (
  state: StateSchema
): TagSchema['select']['currentTags'] => state.tag?.select.currentTags
