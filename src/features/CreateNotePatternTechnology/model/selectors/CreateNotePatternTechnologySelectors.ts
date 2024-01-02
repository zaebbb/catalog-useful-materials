import { type StateSchema } from '@app/providers/StoreProvider'
import {
  type CreateNotePatternTechnologySchema,
} from '../types/CreateNotePatternTechnologySchema'

export const getLinkTechnologySelector = (
  state: StateSchema
): string => state.createNotePatternTechnology?.values.linkTechnology ?? ''

export const getLinkDocsSelector = (
  state: StateSchema
): string => state.createNotePatternTechnology?.values.linkDocs ?? ''

export const getLinkInstallSelector = (
  state: StateSchema
): string => state.createNotePatternTechnology?.values.linkInstall ?? ''

export const getIsLoadingSelector = (
  state: StateSchema
): boolean => state.createNotePatternTechnology?.isLoading ?? false

export const getValidationSelector = (
  state: StateSchema
): CreateNotePatternTechnologySchema['validation'] => {
  return state.createNotePatternTechnology?.validation
}

export const getCreatedCodeSelector = (
  state: StateSchema
): string => state.createNotePatternTechnology?.createdNoteCode ?? ''
