import { type Additional, type Mods } from '@lib/helpers/classNames'
import { classNames } from '@lib/helpers/classNames'
import React, { memo } from 'react'
import cls from './Badge.module.scss'

/** @module Badge */

/**
 * @type ColorType
 * @description Описывает возможные применимые типы цвета
 * */
type ColorType =
  'neutral' |
  'white' |
  'purple' |
  'success' |
  'info' |
  'warning' |
  'danger'

/**
 * @type ColorVariant
 * @description Описывает возможные вариации одного тона цвета (кроме gradient)
 * */
type ColorVariant = '80' | '70' | '60' | '50' | '40' | '30' | '20' | '10'

type BorderType = 'default' | 'fill'

interface BadgeProps extends React.PropsWithChildren {
  className?: string
  color?: ColorType
  variant?: ColorVariant
  border?: BorderType
}

export const Badge: React.FC<BadgeProps> = memo((props: BadgeProps) => {
  const {
    className,
    color = 'neutral',
    variant = '30',
    border = 'fill',
    children,
  } = props

  const mods: Mods = {
    [cls.BadgeLightColor]: Number(variant) > 39 && border !== 'default',
    [cls.BadgeDarkColor]: Number(variant) < 39 || border === 'default',
  }

  const additional: Additional = [
    className,
    cls[`border-${border}`],
    cls[`color-type-${color}-${variant}`],
  ]

  return (
    <div className={classNames(cls.Badge, mods, additional)}>
      {children}
    </div>
  )
})
