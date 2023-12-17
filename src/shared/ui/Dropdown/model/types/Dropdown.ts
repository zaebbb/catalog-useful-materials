import { type ButtonProps } from '@ui-kit/Button'
import type React from 'react'

/**
 * @type DropdownItemType
 * @description Описывает тип элемента Dropdown
 * @description link - Элемент будет ссылочный
 * @description button - Элемент будет выступать кнопка
 * */
export type DropdownItemType = 'link' | 'button'

/**
 * @interface DropdownItem
 * @description Описывает параметры одного элемента в массиве элементов Dropdown
 * */
export interface DropdownItem {
  /** Внутреннее содержание элемента, возможно использование ReactNode или кнопку */
  content: React.ReactElement<ButtonProps> | React.ReactNode
  /** Ссылка при использовании параметра type как link, необязательный */
  link?: string
  /** Тип элемента, необязательный */
  type?: DropdownItemType
  /** Компонент описывающий входящие параметры для компонента Button, необязательный */
  buttonProps?: ButtonProps
}

/**
 * @interface DropdownProps
 * @description Описывает принимаемые параметры в компонент Dropdown
 * */
export interface DropdownProps {
  /** Основнай элемент показывающий список Dropdown */
  trigger: React.ReactElement<ButtonProps>
  /** Массив с элементами Dropdown */
  items: DropdownItem[]
}
