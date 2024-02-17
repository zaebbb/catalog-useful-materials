import { type StateSchema } from '@app/providers/StoreProvider'

export const getDescriptionSelector = (
  state: StateSchema
): string => state.noteSearch?.values.description ?? ''

export const getPageSelector = (
  state: StateSchema
): number => state.noteSearch?.values.page ?? 0
