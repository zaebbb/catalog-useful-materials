import { type BaseResponse } from '@api/axiosApi'
import {
  type BaseFieldsNotesRequest,
  type BaseFieldsValidation,
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

export interface TechnologyPatternValidation extends BaseFieldsValidation {
  linkTechnology?: string
  linkInstall?: string
  linkDocs?: string
  icon?: string
}

// TODO: после реализации парсинга добавить парсинг изображения здесь

export interface CreateNotePatternTechnologySchema {
  values: {
    linkTechnology: string
    linkInstall: string
    linkDocs: string
  }
  isLoading: boolean
  validation?: TechnologyPatternValidation
  createdNoteCode?: string
}

export type TechnologyPatternResponse =
  BaseResponse<TechnologyPatternResponseSuccess, TechnologyPatternValidation>
