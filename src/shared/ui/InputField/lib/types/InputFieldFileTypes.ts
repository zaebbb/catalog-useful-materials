import type React from 'react'
import { type DefaultOnChangeOptions, type InputFieldBaseProps } from './InputFieldBaseTypes'

export interface FileOnChangeOptions extends DefaultOnChangeOptions {
  isMultiple: boolean
}

export interface InputFieldFileProps<O extends FileOnChangeOptions>
  extends Omit<InputFieldBaseProps<string, O>, 'onChange' | 'value'> {
  isMultiple?: boolean
  onChange?: (e: Files, options?: O) => void
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
