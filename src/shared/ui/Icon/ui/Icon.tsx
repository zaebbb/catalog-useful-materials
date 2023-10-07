import React, { memo } from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './Icon.module.scss'

interface IconProps {
  className?: string
}

export const Icon: React.FC<IconProps> = memo((props: IconProps) => {
  const {className} = props
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.Icon, {}, [className])}>
      
    </div>
  )
})
