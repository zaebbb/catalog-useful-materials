import { type BaseResponse } from '@api/axiosApi'
import {
  type BaseFieldsNotesRequest,
  type BaseFieldsValidation, type NoteMode,
  type NotesFields,
} from '@entities/Notes'

export interface TechnologyPatternRequest extends BaseFieldsNotesRequest {
  linkTechnology: NotesFields['text']
  linkInstall: NotesFields['text']
  linkDocs: NotesFields['text']
  icon: NotesFields['file']
}

export interface TechnologyPatternResponseSuccess {
  code: string
}

export type TechnologyPatternValidation = BaseFieldsValidation
& Partial<Record<keyof TechnologyPatternRequest, string>>

// TODO: после реализации парсинга добавить парсинг изображения здесь

export interface NotePatternTechnologySchema {
  values: {
    linkTechnology: string
    linkInstall: string
    linkDocs: string
  }
  editValues: {
    icon: string
  }
  isLoading: boolean
  validation?: TechnologyPatternValidation
  saveNoteCode?: string
}

export type TechnologyPatternKeys = 'linkTechnology' | 'linkInstall' | 'linkDocs' | 'icon'

export type TechnologyPatternResponse =
  BaseResponse<TechnologyPatternResponseSuccess, TechnologyPatternValidation>

export interface SaveNotePatternTechnologyParams {
  files: Files
  mode: NoteMode
}
