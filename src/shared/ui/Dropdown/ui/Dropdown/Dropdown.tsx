import { type DropdownProps } from '@ui-kit/Dropdown/model/types/Dropdown'
import { DropdownClickable } from '@ui-kit/Dropdown/ui/DropdownClickable/DropdownClickable'
import { DropdownHovered } from '@ui-kit/Dropdown/ui/DropdownHovered/DropdownHovered'
import React, { memo } from 'react'

/** @module Dropdown */

/**
 * @type DropdownMode
 * @description Описывает способ показа Dropdown элементов
 * @description clickable - способ показа элементов через наведение на trigger
 * @description hovered - способ показа элементов через нажатие на trigger
 * */
type DropdownMode = 'clickable' | 'hovered'

/**
 * @interface DropdownOptions
 * @description Описывает передаваемые параметры в компонент
 * @description Наследует свойства DropdownProps
 * */
export interface DropdownOptions extends DropdownProps {
  /** Способ показа Dropdown элементов */
  mode?: DropdownMode
}

/**
 * @description Компонент реализующий показ выпадающего меню
 * @param {DropdownOptions} props - Пропсы типа DropdownOptions
 * */
export const Dropdown: React.FC<DropdownOptions> = memo((props: DropdownOptions) => {
  const {
    mode = 'hovered',
    ...other
  } = props

  if (mode === 'clickable') {
    return (
      <DropdownClickable {...other} />
    )
  }

  return (
    <DropdownHovered {...other} />
  )
})
