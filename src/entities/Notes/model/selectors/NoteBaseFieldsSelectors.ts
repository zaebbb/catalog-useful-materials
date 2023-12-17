import { type StateSchema } from '@app/providers/StoreProvider'
import {
  type BaseFieldsValidation,
} from '../types/NotesSchema'

export const getTitleSelector =
  (state: StateSchema): string => state.noteBaseField?.values.title ?? ''

export const getDescriptionSelector =
  (state: StateSchema): string => state.noteBaseField?.values.description ?? ''

export const getDraftSelector =
  (state: StateSchema): boolean => state.noteBaseField?.values.draft ?? false

export const getIsLoadingSelector =
  (state: StateSchema): boolean => state.noteBaseField?.isLoading ?? false

export const getValidationSelector =
  (state: StateSchema): BaseFieldsValidation | undefined => {
    return state.noteBaseField?.validation
  }
