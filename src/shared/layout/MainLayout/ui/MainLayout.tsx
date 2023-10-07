import React, { memo } from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './MainLayout.module.scss'

interface MainLayoutProps {
  className?: string
}

export const MainLayout: React.FC<MainLayoutProps> = memo((props: MainLayoutProps) => {
  const {className} = props
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.MainLayout, {}, [className])}>
      
    </div>
  )
})
