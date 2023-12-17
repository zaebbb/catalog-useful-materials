import { type TextareaMode } from '../../lib/types/TextareaFieldBaseTypes'

export const getMenubar = (mode: TextareaMode): boolean => {
  if (mode === 'default') {
    return true
  }

  if (mode === 'code') {
    return false
  }

  return false
}

export const getStatusbar = (mode: TextareaMode): boolean => {
  if (mode === 'default') {
    return true
  }

  if (mode === 'code') {
    return true
  }

  return false
}
