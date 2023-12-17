import React from 'react'
import { type BaseHookOptions } from '../../types/InputFieldFileTypes'

export interface UseFieldFileDragOnDropResult {
  onDeleteHandler: (key: string) => void
}

export const useFieldFileDeleteHandler = (
  props: Omit<BaseHookOptions, 'isMultiple'>
): UseFieldFileDragOnDropResult => {
  const {
    setFiles,
    fileMessageClean,
  } = props

  const onDeleteHandler = React.useCallback((key: string) => {
    fileMessageClean()
    setFiles((prev) => {
      return prev.filter(fileData => fileData.key !== key)
    })
  }, [fileMessageClean, setFiles])

  return {
    onDeleteHandler,
  }
}
