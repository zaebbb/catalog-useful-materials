import { useAuth } from '@entities/User'
import { classNames, type Mods } from '@lib/helpers/classNames'
import { AppPadding } from '@ui-kit/AppPadding'
import { Logo } from '@ui-kit/Logo/ui/Logo'
import { HStack } from '@ui-kit/Stack'
import React, { memo } from 'react'
import { NavbarIcons } from '../NavbarIcons/NavbarIcons'
import { NavbarMenu } from '../NavbarMenu/NavbarMenu'
import { NavbarUserInfo } from '../NavbarUserInfo/NavbarUserInfo'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = memo((props: NavbarProps) => {
  const { className } = props
  const {
    isMounted,
  } = useAuth()

  const mods: Mods = {
    [cls.Navbar]: true,
  }

  return (
    <AppPadding className={classNames(cls.Navbar, mods, [className])}>
      <HStack align={'center'} justify={'space-between'} isWrap>
        <HStack gap={24} align={'center'} isWrap>
          <Logo />
          <NavbarMenu />
        </HStack>
        <HStack gap={12} align={'center'}>
          <NavbarIcons />
          {isMounted && <NavbarUserInfo />}
        </HStack>
      </HStack>
    </AppPadding>
  )
})
