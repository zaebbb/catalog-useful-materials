import { generateKey } from '@lib/helpers/generateKey'
import { Button } from '@ui-kit/Button'
import { type DropdownItem } from '@ui-kit/Dropdown'
import React from 'react'
import { type RenderItemOptions } from '../types/Navbar'

export const renderItem = (props: RenderItemOptions): DropdownItem => {
  const {
    buttonAddon,
    link,
    label,
  } = props

  return {
    link,
    content: (
      <Button
        fill={'clear'}
        addonLeft={buttonAddon}
        addonGap={8}
        key={generateKey()}
      >
        {label}
      </Button>
    ),
  }
}
