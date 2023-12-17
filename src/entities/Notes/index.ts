export type {
  BaseFieldsRequest as BaseFieldsNotesRequest,
  Fields as NotesFields,
  BaseFieldsValidation,
  IsLoadingNoteParams,
  SetIsLoadingNoteParams,
} from './model/types/NotesSchema'
export {
  NoteBaseFieldsReducer,
  NoteBaseFieldsActions,
} from './model/slice/NoteBaseFieldsSlice'
export {
  NoteBaseFields,
} from './ui/NoteBaseFields/NoteBaseFields'
export type {
  NoteBaseFieldsSchema,
} from './model/types/NoteBaseFieldsSchema'
export type {
  NoteDetailsSchema,
} from './model/types/NotesDetailsSchema'
export { NotesDetails } from './ui/NotesDetails/NotesDetails'
