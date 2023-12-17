import { type Additional, classNames, type Mods } from '@lib/helpers/classNames'
import React, { memo } from 'react'
import clsCommon from '../../styles/TextCommon.module.scss'
import cls from './Span.module.scss'

/** @module Span */

/**
 * @type ColorType
 * @description Описывает возможные применимые типы цвета
 * */
type ColorType =
  'neutral' |
  'white' |
  'gradient' |
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

/**
 * @type TextAlign
 * @description Описывает положение текста
 * @description left - Расположение текста по левому краю
 * @description center - Расположение текста по центру
 * @description right - Расположение текста по правому краю
 * */
type TextType = 'small' | 'medium' | 'large'

/**
 * @interface SpanProps
 * @description Описывает передаваемые параметры в компонент
 * */
interface SpanProps {
  /** Передаваемый класс в компонент, необязательный */
  className?: string
  /** Цвет текста, необязательный */
  color?: ColorType
  /** Вариант цвета у текста, необязательный */
  variant?: ColorVariant
  /** Основное содержание, необязательный */
  content?: React.ReactNode
  /** Тип текста (размер), необязательный */
  font?: TextType
}

/**
 * @description Компонент реализующий дополнительный компонент Span
 * @description Позволяет реализовывать различную вариантивность цвета на проекте
 * @param {SpanProps} props - Пропсы типа SpanProps
 * */
export const Span: React.FC<SpanProps> = memo((props: SpanProps) => {
  const {
    className,
    color = 'neutral',
    variant = '70',
    content,
    font,
  } = props

  const mods: Mods = {
    [cls.gradient]: color === 'gradient',
    [cls.white]: color === 'white',
  }

  const additional: Additional = [
    className,
    clsCommon[`text-size-${font}`],
  ]

  if (color !== 'gradient' && color !== 'white') {
    additional.push(cls[`color-type-${color}-${variant}`])
  }

  return (
    <span className={classNames(cls.Span, mods, additional)}>
      {content}
    </span>
  )
})
