import { type Additional, classNames } from '@lib/helpers/classNames'
import React, { type CSSProperties, memo } from 'react'
import cls from './../../styles/TextCommon.module.scss'

/** @module Text */

/**
 * @type TextType
 * @description Описывает размер текста
 * @description small - Маленький текст
 * @description medium - Средний текст
 * @description large - Большой текст
 * */
type TextType = 'small' | 'medium' | 'large'

/**
 * @type TextType
 * @description Описывает цвет текста
 * @description default - Цвет по умолчанию
 * @description white - Белый цвет
 * */
type TextColor = 'default' | 'white'

/**
 * @type TextAlign
 * @description Описывает положение текста
 * @description left - Расположение текста по левому краю
 * @description center - Расположение текста по центру
 * @description right - Расположение текста по правому краю
 * */
type TextAlign = 'left' | 'center' | 'right'

/**
 * @interface TextProps
 * @description Описывает передаваемые параметры в компонент
 * @description Наследует children с помощью типа от React
 * */
interface TextProps extends React.PropsWithChildren {
  /** Передаваемый класс в компонент, необязательный */
  className?: string
  /** Тип текста (размер), необязательный */
  type?: TextType
  /** Цвет текста, необязательный */
  color?: TextColor
  /** Позиционирование текста, необязательный */
  align?: TextAlign
  /** Ширина текста, необязательный */
  width?: string
}

/**
 * @description Компонент реализующий классический тег <p> в приложении
 * @param {TextProps} props - Пропсы типа TextProps
 * */
export const Text: React.FC<TextProps> = memo((props: TextProps) => {
  const {
    className,
    children,
    type = 'medium',
    color = 'default',
    align = 'left',
    width = '100%',
  } = props

  const styles: CSSProperties = {
    maxWidth: width,
  }

  const additional: Additional = [
    className,
    cls[`text-size-${type}`],
    cls[`text-color-${color}`],
    cls[`text-align-${align}`],
  ]

  return (
    <p style={styles} className={classNames(cls.Text, {}, additional)}>
      {children}
    </p>
  )
})
