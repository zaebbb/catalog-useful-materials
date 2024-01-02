import { type StateSchema } from '@app/providers/StoreProvider'

export const getAppIdSelector =
  (state: StateSchema): number | undefined => state.vkAuth?.appId
