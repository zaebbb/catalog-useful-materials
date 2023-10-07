import React, { memo } from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './Button.module.scss'

interface ButtonProps {
  className?: string
}

export const Button: React.FC<ButtonProps> = memo((props: ButtonProps) => {
  const {className} = props
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.Button, {}, [className])}>
      
    </div>
  )
})
