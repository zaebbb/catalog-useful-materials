import { type Additional, classNames, type Mods } from '@lib/helpers/classNames'
import { type FlexGap, HStack } from '@ui-kit/Stack'
import React, { memo } from 'react'
import cls from './Button.module.scss'

/** @module Button */

/**
 * @type ButtonSize
 * @description Описывает размер кнопки
 * @description small - маленькая кнопка
 * @description medium - средняя кнопка
 * @description large - большая кнопка
 * */
export type ButtonSize = 'small' | 'medium' | 'large'

/**
 * @type ButtonTheme
 * @description Описывает тему кнопки
 * @description default - используется цвет по умолчанию
 * @description gradient - используется градиентный цвет
 * */
export type ButtonTheme = 'default' | 'gradient' | 'danger'

/**
 * @type ButtonFill
 * @description Описывает цветовое наполнение кнопки
 * @description full - применяется к фону кнопки
 * @description border - применяется к обводке кнопки
 * @description clear - полностью убирается обводка и фон кнопки, убирается padding
 * */
export type ButtonFill = 'full' | 'border' | 'clear'

/**
 * @type ButtonProps
 * @description Описывает передаваемые параметры в компонент
 * @description Наследует классические атрибуты для кнопки
 * @description Наследует children от React
 * */
export type ButtonProps =
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> &
  React.PropsWithChildren<{
  /** Передаваемый класс в компонент, необязательный */
    className?: string
    /** Размер кнопки, необязательный */
    size?: ButtonSize
    /** Тема кнопки, необязательный */
    theme?: ButtonTheme
    /** Наполнение кнопки, необязательный */
    fill?: ButtonFill
    /** Параметр указывающий неактивна ли кнопка, необязательный */
    isDisabled?: boolean
    /** Дополнительный контент (иконка) перед основным содержанием */
    addonLeft?: React.ReactNode
    /** Дополнительный контент (иконка) после основного содержания */
    addonRight?: React.ReactNode
    /** Расстояние gap между доп. контентом и основным содержанием */
    addonGap?: FlexGap
  }>

/**
 * @description Кнопка приложения с дополнениями расширяющие функционал
 * @param {ButtonProps} props - Пропсы типа ButtonProps
 * */
export const Button: React.FC<ButtonProps> = memo((props: ButtonProps) => {
  const {
    className,
    size = 'medium',
    theme = 'default',
    fill = 'full',
    addonLeft,
    addonRight,
    isDisabled = false,
    children,
    addonGap = 12,
    ...otherProps
  } = props

  const additional: Additional = [
    className,
    cls[`size-${size}`],
    cls[`theme-${theme}`],
    cls[`fill-${fill}`],
  ]

  const mods: Mods = {
    [cls.disabled]: isDisabled,
  }

  return (
    <button
      className={classNames(cls.Button, mods, additional)}
      type={'button'}
      disabled={isDisabled}
      {...otherProps}
    >
      <HStack className={cls.ButtonFlex} align={'center'} justify={'center'} gap={addonGap}>
        {addonLeft && <div className={cls.addon}>{addonLeft}</div>}
        {children}
        {addonRight && <div className={cls.addon}>{addonRight}</div>}
      </HStack>
    </button>
  )
})
