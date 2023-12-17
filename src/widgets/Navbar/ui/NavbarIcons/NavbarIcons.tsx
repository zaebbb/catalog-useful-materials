import { LangSwitcher } from '@features/LangSwitcher'
import { HStack } from '@ui-kit/Stack'
import React, { memo } from 'react'

interface NavbarIconsProps {
  className?: string
}

export const NavbarIcons: React.FC<NavbarIconsProps> = memo((props: NavbarIconsProps) => {
  const { className } = props

  return (
    <HStack gap={12} className={className}>
      <LangSwitcher />
    </HStack>
  )
})
