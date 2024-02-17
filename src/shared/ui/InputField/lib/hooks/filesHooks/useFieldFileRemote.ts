import { generateKey } from '@lib/helpers/generateKey'
import { getFileDataApi } from '@lib/helpers/getFileDataApi'
import { getFileDataFromUrl } from '@lib/helpers/getFileDataFromUrl'
import { isLink } from '@lib/helpers/isLink'
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
      if (isLink(remoteFile)) {
        const file = await getFileDataFromUrl(remoteFile)

        files.push({
          file,
          key: generateKey(),
        })

        continue
      }

      const file = await getFileDataApi(remoteFile)

      if (file) {
        files.push({
          file,
          key: generateKey(),
        })
      }
    }

    setFiles(files)
  }, [setFiles])

  return {
    getRemoteFiles,
  }
}
