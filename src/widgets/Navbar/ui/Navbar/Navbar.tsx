import React, { memo } from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = memo((props: NavbarProps) => {
  const {className} = props
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      
    </div>
  )
})
