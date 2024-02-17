import { type BaseResponse } from '@api/axiosApi'

export interface CreateNoteType {
  name: string
  code: string
  draft: boolean
  fields: NoteTypeFieldItem[]
}

export type CreateNoteTypeRequest = Omit<CreateNoteType, 'fields'> & {
  fields: NoteTypeFieldItemRequest[]
}

export interface NoteTypeFieldItem {
  key: string
  title: string
  customField: SelectFieldOption<any>
  draft: boolean
  required: boolean
}

export type NoteTypeFieldItemRequest = Omit<NoteTypeFieldItem, 'customField'> & {
  fieldId: number
}

export type NoteTypeCurrentFieldItem = Partial<Omit<NoteTypeFieldItem, 'customField'>> & {
  customField?: SelectFieldOption<any>
}

export type CreateNoteTypePatternValidation =
  Partial<Record<keyof CreateNoteTypePatternSchema['values'], string>>

export interface CreateNoteTypePatternSchema {
  values: CreateNoteType
  currentField: NoteTypeCurrentFieldItem
  isLoading: boolean
  validation?: CreateNoteTypePatternValidation
  isCreated: boolean
  readonly _remoteCustomFieldsPath: string
}

export interface CreateNoteTypeSuccess {
  isCreated: boolean
}

export type CreateNoteTypeResponse = BaseResponse<
CreateNoteTypeSuccess,
CreateNoteTypePatternValidation
>
