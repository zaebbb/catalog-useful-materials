import { useAuth } from '@entities/User'
import {
  getRouteAdmin,
  getRouteLogin,
  getRouteRegister,
  getRouteUserViewNotes,
} from '@lib/router'
import { HStack } from '@ui-kit/Stack'
import { NavItem } from '@widgets/Navbar/ui/NavItem/NavItem'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

interface NavbarIMenuProps {
  className?: string
}

export const NavbarMenu: React.FC<NavbarIMenuProps> = memo((props: NavbarIMenuProps) => {
  const { className } = props
  const { t } = useTranslation('navbar')
  const {
    isMounted,
    isAdmin,
  } = useAuth()

  return (
    <HStack gap={24} align={'center'} className={className}>
      {!isMounted && (
        <>
          <NavItem
            label={t('navbar-login')}
            link={getRouteLogin()}
          />
          <NavItem
            label={t('navbar-register')}
            link={getRouteRegister()}
          />
        </>
      )}

      {isMounted && (
        <>
          <NavItem
            label={t('navbar-notes')}
            link={getRouteUserViewNotes()}
          />
        </>
      )}

      {isAdmin && (
        <>
          <NavItem
            label={t('navbar-admin')}
            link={getRouteAdmin()}
          />
        </>
      )}
    </HStack>
  )
})
