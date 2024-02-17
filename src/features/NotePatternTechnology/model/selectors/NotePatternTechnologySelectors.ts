import { type StateSchema } from '@app/providers/StoreProvider'
import {
  type NotePatternTechnologySchema,
} from '../types/NotePatternTechnologySchema'

export const getLinkTechnologySelector = (
  state: StateSchema
): string => state.notePatternTechnology?.values.linkTechnology ?? ''

export const getLinkDocsSelector = (
  state: StateSchema
): string => state.notePatternTechnology?.values.linkDocs ?? ''

export const getLinkInstallSelector = (
  state: StateSchema
): string => state.notePatternTechnology?.values.linkInstall ?? ''

export const getIsLoadingSelector = (
  state: StateSchema
): boolean => state.notePatternTechnology?.isLoading ?? false

export const getValidationSelector = (
  state: StateSchema
): NotePatternTechnologySchema['validation'] => {
  return state.notePatternTechnology?.validation
}

export const getSaveCodeSelector = (
  state: StateSchema
): string => state.notePatternTechnology?.saveNoteCode ?? ''

export const getRemoteIconEditSelector = (
  state: StateSchema
): string => state.notePatternTechnology?.editValues.icon ?? ''
