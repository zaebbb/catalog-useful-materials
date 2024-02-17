import { type BaseFieldsValidation } from './NotesSchema'

export interface FieldNoteItem {
  id: number
  code: string
  value: string
  name: string
}

export interface NoteBaseFieldsSchema {
  values: {
    title: string
    description: string
    draft: boolean
    fields: FieldNoteItem[]
    id?: number
  }
  isLoading: boolean
  validation?: BaseFieldsValidation
}
