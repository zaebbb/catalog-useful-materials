import { type InputHTMLAttributes } from 'react'
import type React from 'react'

export type HTTMLInputFieldBaseProps = Omit<
InputHTMLAttributes<HTMLInputElement>,
'onChange'
>
export type InputType = 'text' | 'number' | 'hidden' | 'password'
export type InputBorderColor = 'default' | 'gradient' | 'empty'
export type InputBorderSize = 'small' | 'medium'

export interface InputFieldBaseProps<T extends string> extends HTTMLInputFieldBaseProps {
  className?: string
  borderColor?: InputBorderColor
  borderSize?: InputBorderSize
  icon?: React.ReactNode
  value?: T
  type?: InputType
  onChange?: (value: T) => void
  placeholder?: string
  label?: React.ReactNode
  validation?: string
  isReadonly?: boolean
  isLoading?: boolean
  isMax?: boolean
  success?: string
  description?: React.ReactNode
}
