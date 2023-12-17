import { generateKey } from '@lib/helpers/generateKey'
import React from 'react'
import { getFileExtension } from '../../helpers/getFileExtension'
import { getFilesName } from '../../helpers/getFilesName'
import { type BaseHookOptions } from '../../types/InputFieldFileTypes'

interface UseFieldFileOnChangeHandlerResult {
  onChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void
}

interface UseFieldFileOnChangeProps extends BaseHookOptions {
  files: Files
}

export const useFieldFileOnChangeHandler = (
  props: UseFieldFileOnChangeProps
): UseFieldFileOnChangeHandlerResult => {
  const {
    files,
    fileMessageClean,
    setFiles,
    isMultiple,
  } = props

  const onChangeHandler = React.useCallback((e: React.FormEvent<HTMLInputElement>) => {
    if (!isMultiple) {
      setFiles([])
    }

    if (e.currentTarget.files) {
      fileMessageClean()

      const newFiles = e.currentTarget.files as unknown as FileType[]
      const filterFiles = [...newFiles]
        .filter(file => !getFilesName(files).includes(file.name))
        .filter(file => getFileExtension(file))
        .map((file): FileData => ({
          file,
          key: generateKey(),
        }))

      setFiles((prev) => ([
        ...prev,
        ...filterFiles,
      ]))
    }
  }, [files, isMultiple, fileMessageClean, setFiles])

  return {
    onChangeHandler,
  }
}
