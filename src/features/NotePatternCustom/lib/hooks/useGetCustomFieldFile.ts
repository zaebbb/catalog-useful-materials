import React from 'react'

export interface UseGetCustomFieldFile {
  getFieldFile: (
    files: Record<string, Files | FileData>,
    isMultiple: boolean,
    key: string
  ) => Files
}

export const useGetCustomFieldFile = (): UseGetCustomFieldFile => {
  const getFieldFile = React.useCallback((
    files: Record<string, Files | FileData>,
    isMultiple: boolean,
    key: string
  ): Files => {
    if (files[key]) {
      if (isMultiple) {
        return files[key] as Files
      } else {
        return [files[key] as FileData]
      }
    }

    return []
  }, [])

  return {
    getFieldFile,
  }
}
