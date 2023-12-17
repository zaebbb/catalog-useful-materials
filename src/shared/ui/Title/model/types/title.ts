import type React from 'react'

/**
 * @type HeadingVariant
 * @description Описывает вариативность используемых тегов
 * @description extra - Увеличенный заголовок
 * @description large - Большой заголовок
 * @description medium - Средний заголовок
 * @description regular - Обычный заголовок
 * @description small - Маленький заголовок
 * @description mini - Мини изображение
 * */
export type HeadingVariant =
  'extra' |
  'large' |
  'medium' |
  'regular' |
  'small' |
  'mini'

/**
 * @type HeadingAlign
 * @description Описывает позиционирование заголовка
 * @description left - Слева текст
 * @description center - По центру текст
 * @description right - Справа текст
 * */
export type HeadingAlign = 'left' | 'center' | 'right'

/**
 * @type HeaderTag
 * @description Описывает допустимые теги
 * */
export type HeaderTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

/**
 * @interface TitleBaseProps
 * @description Описывает передаваемые параметры в компонент
 * */
export interface TitleBaseProps {
  /** Передаваемый класс в компонент, необязательный */
  className?: string
  /** Вариант заголовка, необязательный */
  variant?: HeadingVariant
  /** Передаваемый children */
  children: React.ReactNode
  /** Позиционирование заголовка, необязательный */
  align?: HeadingAlign
}
