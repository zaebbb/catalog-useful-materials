import { type FieldNoteItem } from '../../model/types/NoteBaseFieldsSchema'

export const getFieldNotePattern = <T>(
  fields: FieldNoteItem[],
  code: T
): FieldNoteItem | undefined => {
  return fields.find((field) => field.name === code)
}
