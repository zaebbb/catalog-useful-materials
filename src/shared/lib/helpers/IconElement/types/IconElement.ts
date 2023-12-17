import { type IconBaseProps } from '@react-icons/all-files'
import { type LazyExoticComponent } from 'react'
import type React from 'react'
import { type IconLibName } from './icons'

/**
 * @type IconLibOptions
 * @description Тип описывающий объект с иконками которые используют lazy подход в своей загрузке
 * */
export type IconLibOptions = Record<
IconLibName,
LazyExoticComponent<(props: IconBaseProps) => React.JSX.Element>
>

/**
 * @interface IconElementProps
 * @description Наследует свойства библиотеки react-icons IconBaseProps
 * @description Передается в качестве значения тип допустыминых созданных иконок на проекте
 * */
export interface IconElementProps extends IconBaseProps {
  /** Иконка которая объявлена в проекте */
  icon: IconLibName
}
