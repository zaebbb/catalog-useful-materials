import { AppLink } from '@ui-kit/AppLink'
import { Button } from '@ui-kit/Button'
import React from 'react'
import { memo } from 'react'
import { type RenderItemOptions } from '../../lib/types/Navbar'

export const NavItem: React.FC<RenderItemOptions> = memo((props: RenderItemOptions) => {
  const {
    buttonAddon,
    link,
    label,
  } = props

  return (
    <AppLink to={link}>
      <Button fill={'clear'} addonLeft={buttonAddon} addonGap={8}>
        {label}
      </Button>
    </AppLink>
  )
})
