import { type BaseFieldsValidation } from './NotesSchema'

export interface NoteBaseFieldsSchema {
  values: {
    title: string
    description: string
    draft: boolean
  }
  isLoading: boolean
  validation?: BaseFieldsValidation
}
