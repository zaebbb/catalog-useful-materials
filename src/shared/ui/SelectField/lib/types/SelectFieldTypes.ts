import type React from 'react'
import { type SelectHTMLAttributes } from 'react'

export type SelectView = 'default' | 'tabs'

/**
 * @type HTMLSelectFieldBaseProps
 * @description Описывает базовые параметры для select как у стандартных select
 * @description Исключение составляют: onChange
 * */
export type HTMLSelectFieldBaseProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>

/**
 * @type SelectBorderColor
 * @description Описывает цвет обводки
 * @description default - Классический цвет обводки
 * @description gradient - Градиентный цвет обводки
 * */
export type SelectBorderColor = 'default' | 'gradient'

/**
 * @type SelectBorderSize
 * @description Описывает размер обводки (border)
 * @description small - Маленький размер обводки
 * @description medium - Средний размер обводки
 * */
export type SelectBorderSize = 'small' | 'medium'

/**
 * @interface SelectFieldBaseProps
 * @description Описывает передаваемые параметры в компонент
 * @description Передается generic наследуемый от string
 * @description Наследует тип HTMLSelectFieldBaseProps
 * */
export interface SelectFieldBaseProps<T extends string> extends HTMLSelectFieldBaseProps {
  /** Передаваемый класс в компонент, необязательный */
  className?: string
  /** Массив входящих элементов, необязательный */
  items?: SelectItems<T>
  /** Callback выполняющийся при выборе определенный опций, необязательный */
  onChange?: (items: SelectItems<T>) => void
  /** Передается активный элемент, необязательный */
  selected?: SelectItems<T>
  /** Цвет обводки, необязательный */
  borderColor?: SelectBorderColor
  /** Размер обводки, необязательный */
  borderSize?: SelectBorderSize
  /** Начальный placeholder (если нету selected элемента), необязательный */
  placeholder?: string
  /** Наименование поля, необязательный */
  label?: React.ReactNode
  /** Текст ошибки (валидации), необязательный */
  validation?: string
  /** Указания является ли компонент только readonly, необязательный */
  isReadonly?: boolean
  /** Указание отображения анимации загрузки, необязательный */
  isLoading?: boolean
  /** Указание размещения поля во всю доступную ширину, необязательный */
  isMax?: boolean
  /** Текст в случае успешного действия, необязательный */
  success?: string
  /** Указания является ли Select множественным */
  isMultiple?: boolean
  /** Указания нужно ли включить поиск или нет */
  isSearch?: boolean
  /** Указание обязательноси заполнения поля */
  isRequired?: boolean
  /** Placeholder для поискового input */
  searchPlaceholder?: string
  /** Описание, размещаемое под полем */
  description?: React.ReactNode
}
