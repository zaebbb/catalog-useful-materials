import type React from 'react'
import { type InputFieldBaseProps } from './InputFieldBaseTypes'

export interface InputFieldFileProps
  extends Omit<InputFieldBaseProps<string>, 'onChange' | 'value'> {
  isMultiple?: boolean
  onChange?: (e: Files) => void
  value?: Files
  isOpenFiles?: boolean
  isRemovingFiles?: boolean
  remoteFiles?: string[]
}

export interface BaseHookOptions {
  setFiles: React.Dispatch<React.SetStateAction<Files>>
  fileMessageClean: () => void
  isMultiple: boolean
}
