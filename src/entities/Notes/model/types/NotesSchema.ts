import type React from 'react'

export type NoteMode = 'create' | 'edit'

export interface BaseFieldsRequest {
  typeId: number
  viewId: number
  userId: number
  categoryId: number
  tagsIds: number[]

  title: string
  description: string
  draft: boolean

  mode: NoteMode

  // edit mode
  id?: number
}

export interface Fields extends BaseFieldsRequest {
  file: FileType
  files: Files
  text: string
  checkbox: boolean
  int: number
}

export type BaseFieldsValidation = Partial<Record<keyof BaseFieldsRequest, string>>

export interface IsLoadingNoteParams {
  isLoading?: boolean
}

export interface SetIsLoadingNoteParams {
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>
}
