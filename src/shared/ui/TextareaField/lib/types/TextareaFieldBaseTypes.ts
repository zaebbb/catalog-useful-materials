import { type DefaultOnChangeOptions } from '@ui-kit/InputField'
import type React from 'react'

export type TextareaMode = 'default' | 'code' | 'clear'

export type OnChangeTextarea<
  O extends DefaultOnChangeOptions
> = (value: string, options: O) => void

export interface TextareaFieldBaseProps<
  O extends DefaultOnChangeOptions
> {
  className?: string
  value?: string
  onChange?: OnChangeTextarea<O>
  label?: React.ReactNode
  validation?: string
  isReadonly?: boolean
  isLoading?: boolean
  isRequired?: boolean
  isMax?: boolean
  success?: string
  height?: number
  name?: string
  description?: React.ReactNode
  mode?: TextareaMode
}
