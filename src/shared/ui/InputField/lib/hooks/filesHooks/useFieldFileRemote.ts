import { generateKey } from '@lib/helpers/generateKey'
import { getFileDataFromUrl } from '@lib/helpers/getFileDataFromUrl'
import React from 'react'
import { type BaseHookOptions } from '../../types/InputFieldFileTypes'

export interface UseFieldFileRemoteResult {
  getRemoteFiles: (remoteFiles: string[]) => Promise<void>
}

export const useFieldFileRemote = (
  props: Omit<BaseHookOptions, 'isMultiple' | 'fileMessageClean'>
): UseFieldFileRemoteResult => {
  const {
    setFiles,
  } = props

  const getRemoteFiles = React.useCallback(async (remoteFiles: string[]) => {
    const files: Files = []

    for (const remoteFile of remoteFiles) {
      const file = await getFileDataFromUrl(remoteFile)
      files.push({
        file,
        key: generateKey(),
      })
    }

    setFiles(files)
  }, [setFiles])

  return {
    getRemoteFiles,
  }
}
