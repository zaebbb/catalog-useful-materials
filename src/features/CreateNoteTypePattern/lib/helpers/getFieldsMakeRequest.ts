import {
  type NoteTypeFieldItem, type NoteTypeFieldItemRequest,
} from '../../model/types/CreateNoteTypePatternSchema'

export const getFieldsMakeRequest = (
  fields?: NoteTypeFieldItem[]
): NoteTypeFieldItemRequest[] => {
  if (!fields) {
    return []
  }

  return fields.map((field): NoteTypeFieldItemRequest => ({
    key: field.key,
    fieldId: field.customField.id,
    draft: field.draft,
    title: field.title,
    required: field.required,
  }))
}
