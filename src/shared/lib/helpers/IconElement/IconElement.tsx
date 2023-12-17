import React from 'react'
import { IconLib } from './lib/IconLib'
import { type IconElementProps } from './types/IconElement'

/** @module IconElement */

/**
 * @description Компонентлениво лениво подгружающий иконки из пакета react-icons
 * @param {IconElementProps} props - Пропсы типа IconElementProps
 * */
export const IconElement = (props: IconElementProps) => {
  const {
    icon,
    ...otherProps
  } = props

  const IconComponent = IconLib[icon]

  return <IconComponent {...otherProps} />
}
