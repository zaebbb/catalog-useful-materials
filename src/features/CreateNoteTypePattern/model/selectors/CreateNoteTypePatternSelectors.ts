import { type StateSchema } from '@app/providers/StoreProvider'
import {
  type CreateNoteTypePatternSchema,
  type NoteTypeFieldItem,
} from '../types/CreateNoteTypePatternSchema'

export const getRemotePathSelector = (
  state: StateSchema
): string => state?.createNoteTypePattern?._remoteCustomFieldsPath ?? ''

export const getNoteTypeNameSelector = (
  state: StateSchema
): string => state?.createNoteTypePattern?.values.name ?? ''

export const getNoteTypeDraftSelector = (
  state: StateSchema
): boolean => state?.createNoteTypePattern?.values.draft ?? false

export const getCustomFieldsValuesSelector = (
  state: StateSchema
): NoteTypeFieldItem[] => state?.createNoteTypePattern?.values.fields ?? []

export const getCreateNoteTypeValidationData = (
  state: StateSchema
): CreateNoteTypePatternSchema['validation'] => state?.createNoteTypePattern?.validation

export const getIsLoadingSelector = (
  state: StateSchema
): boolean => state?.createNoteTypePattern?.isLoading ?? false

export const getIsCreatedSelector = (
  state: StateSchema
): boolean => state?.createNoteTypePattern?.isCreated ?? false

export const getCurrentFieldsValuesData = (
  state: StateSchema
): CreateNoteTypePatternSchema['currentField'] => state?.createNoteTypePattern?.currentField ?? {}
