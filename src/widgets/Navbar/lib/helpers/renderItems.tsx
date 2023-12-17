import { type DropdownItem } from '@ui-kit/Dropdown'
import { renderItem } from '@widgets/Navbar/lib/helpers/renderItem'
import type React from 'react'

export interface renderItemOptions {
  label: string
  link: string
  buttonAddon?: React.ReactNode
}

export const renderItems = (items: renderItemOptions[]): DropdownItem[] => {
  return items.map(renderItem)
}
