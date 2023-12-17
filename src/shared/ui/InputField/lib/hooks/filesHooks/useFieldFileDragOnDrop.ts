import { makeFilesFormat } from '@lib/helpers/makeFilesFormat'
import React from 'react'
import { type BaseHookOptions } from '../../types/InputFieldFileTypes'

type DragEventHandler<T> = React.FormEvent<T> & {
  dataTransfer: DataTransfer
}

export interface UseFieldFileDragOnDropResult {
  isDragActive: boolean
  onHandlerDragOver: (event: DragEventHandler<HTMLLabelElement>) => void
  onHandlerDragLeave: (event: DragEventHandler<HTMLLabelElement>) => void
  onHandlerDrop: (event: DragEventHandler<HTMLLabelElement>) => void
}

export const useFieldFileDragOnDrop = (
  props: BaseHookOptions
): UseFieldFileDragOnDropResult => {
  const {
    setFiles,
    fileMessageClean,
    isMultiple,
  } = props

  const [isDragActive, setIsDragActive] = React.useState<boolean>(false)

  const onHandlerDragOver = React.useCallback((event: DragEventHandler<HTMLLabelElement>) => {
    event.preventDefault()
    setIsDragActive(true)
  }, [])

  const onHandlerDragLeave = React.useCallback((event: DragEventHandler<HTMLLabelElement>) => {
    event.preventDefault()
    setIsDragActive(false)
  }, [])

  const onHandlerDrop = React.useCallback((event: DragEventHandler<HTMLLabelElement>) => {
    event.preventDefault()
    setIsDragActive(false)
    fileMessageClean()

    const droppedFiles: FileType[] = Array.from(event.dataTransfer.files)

    if (!isMultiple && droppedFiles[0]) {
      setFiles(makeFilesFormat([droppedFiles[0]]))
    } else {
      setFiles((prev) => ([
        ...prev,
        ...makeFilesFormat(droppedFiles),
      ]))
    }
  }, [fileMessageClean, isMultiple, setFiles])

  return {
    isDragActive,
    onHandlerDragOver,
    onHandlerDragLeave,
    onHandlerDrop,
  }
}
