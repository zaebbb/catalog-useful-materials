import type React from 'react'

export interface BaseFieldsRequest {
  typeId: number
  viewId: number
  userId: number
  categoryId: number
  tagsIds: number[]

  title: string
  description: string
  draft: boolean
}

export interface Fields extends BaseFieldsRequest {
  file: FileType
  files: Files
  text: string
  checkbox: boolean
}

export interface BaseFieldsValidation {
  typeId?: string
  viewId?: string
  userId?: string
  categoryId?: string
  tagsIds?: string
  title?: string
  description?: string
  draft?: string
}

export interface IsLoadingNoteParams {
  isLoading?: boolean
}

export interface SetIsLoadingNoteParams {
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>
}
