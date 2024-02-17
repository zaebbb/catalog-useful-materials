import { useAuth } from '@entities/User'
import { LangSwitcher } from '@features/LangSwitcher'
import { getRouteCreateNote, getRouteProfile } from '@lib/router'
import { AppLink } from '@ui-kit/AppLink'
import { IconLib } from '@ui-kit/Icon'
import { HStack } from '@ui-kit/Stack'
import React, { memo } from 'react'

interface NavbarIconsProps {
  className?: string
}

export const NavbarIcons: React.FC<NavbarIconsProps> = memo((props: NavbarIconsProps) => {
  const { className } = props
  const {
    isMounted,
  } = useAuth()

  return (
    <HStack gap={12} className={className}>
      {isMounted && (
        <>
          <AppLink to={getRouteCreateNote()}>
            <IconLib
              Icon={'IconPlusOutline'}
            />
          </AppLink>
          <AppLink to={getRouteProfile()}>
            <IconLib
              Icon={'IconUser'}
            />
          </AppLink>
        </>
      )}

      <LangSwitcher />
    </HStack>
  )
})
