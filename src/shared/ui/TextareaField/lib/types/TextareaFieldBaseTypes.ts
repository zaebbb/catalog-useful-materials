import type React from 'react'

export type TextareaMode = 'default' | 'code' | 'clear'

export interface TextareaFieldBaseProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  label?: React.ReactNode
  validation?: string
  isReadonly?: boolean
  isLoading?: boolean
  success?: string
  height?: number
  description?: React.ReactNode
  mode?: TextareaMode
}
