import { type Additional, type Mods, classNames } from '@lib/helpers/classNames'
import React from 'react'
import cls from './Flex.module.scss'

/** @module Flex */

/**
 * @type FlexJustify
 * @description Описывает возможные существующие значения CSS свойства justify-content
 * */
export type FlexJustify =
  'center' | 'space-between' | 'space-around' | 'space-evenly' |
  'start' | 'end' | 'flex-start' | 'flex-end' |
  'normal' | 'stretch'

/**
 * @type FlexAlign
 * @description Описывает возможные существующие значения CSS свойства align-items
 * */
export type FlexAlign =
  'center' | 'normal' | 'stretch' |
  'start' | 'end' | 'flex-start' | 'flex-end' |
  'self-start' | 'self-end' | 'baseline'

/**
 * @type FlexDirection
 * @description Описывает возможные существующие значения CSS свойства flex-direction
 * */
export type FlexDirection =
  'row' | 'row-reverse' | 'column' | 'column-reverse'

/**
 * @type FlexDirection
 * @description Описывает возможные допустимые значения CSS свойства gap
 * */
export type FlexGap =
0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 58 | 60

/**
 * @type DivProps
 * @description Внедряет в себя все свойства которые есть у div элемента в JSX разметке
 * */
type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

/**
 * @interface AvatarProps
 * @description Описывает передаваемые параметры в компонент
 * @description Наследует DivProps
 * @description Наследует внедрение children элемента с помощью react
 * */
export interface FlexProps extends DivProps, React.PropsWithChildren {
  /** Передаваемый класс в компонент, необязательный */
  className?: string
  /** Принимает свойство justify-content, необязательный */
  justify?: FlexJustify
  /** Принимает свойство align-items, необязательный */
  align?: FlexAlign
  /** Принимает свойство flex-direction */
  direction: FlexDirection
  /** Принимает значение для gap, необязательный */
  gap?: FlexGap
  /** Принимает boolean значение для включения свойства flex-wrap, необязательный */
  isWrap?: boolean
  /** Принимает boolean значение для указания максимально возможной ширины, необязательный */
  isMax?: boolean
}

/**
 * @description Компонент для реализации flex контейнера в проекте
 * @param {FlexProps} props - Пропсы типа FlexProps
 * */
export const Flex: React.FC<FlexProps> = (props: FlexProps) => {
  const {
    className,
    children,
    justify = 'normal',
    align = 'normal',
    isWrap = false,
    direction = 'row',
    gap = 32,
    isMax = false,
    ...other
  } = props

  const additional: Additional = [
    className,
    cls[`justify-${justify}`],
    cls[`align-${align}`],
    cls[`direction-${direction}`],
    cls[`gap-${gap}`],
  ]

  const mods: Mods = {
    [cls.max]: isMax,
    [cls.wrap]: isWrap,
  }

  return (
    <div {...other} className={classNames(cls.Flex, mods, additional)}>
      {children}
    </div>
  )
}
