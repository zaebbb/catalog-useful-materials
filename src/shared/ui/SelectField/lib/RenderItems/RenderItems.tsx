import { Listbox } from '@headlessui/react'
import { TypedMemo } from '@lib/components/TypedMemo'
import { classNames } from '@lib/helpers/classNames'
import { IconLib } from '@ui-kit/Icon'
import React from 'react'
import cls from '../../ui/SelectFieldBase/SelectFieldBase.module.scss'

/** @module RenderItemsComponent */

/**
 * @interface RenderItemsProps
 * @description Описывает передаваемые параметры в компонент
 * @description Позволяет передать generic с типом наследуемом от string
 * */
export interface RenderItemsProps<T extends string> {
  /** Элементы (стандартные option) select */
  items: SelectItems<T>
}

/**
 * @description Компонент рендерит основные опции в элементы ListBox пакета headless UI
 * @description Позволяет передать generic с типом наследуемом от string
 * @param {RenderItemsProps} props - Пропсы типа RenderItemsProps
 * */
const RenderItemsComponent = <T extends string>(props: RenderItemsProps<T>) => {
  const {
    items,
  } = props

  const renderItems: React.ReactNode = React.useMemo(() => {
    return items.map((option) => (
      <Listbox.Option
        key={option.code}
        value={option}
      >
        {({ selected }) => (
          <div
            className={
              classNames(
                cls.SelectOption,
                {
                  [cls.SelectOptionActive]: selected,
                },
                []
              )
            }
          >
            {selected && (
              <IconLib
                Icon={'IconCloseOutline'}
                className={cls.SelectOptionClose}
                size={'24'}
              />
            )}

            {option.content}
          </div>
        )}
      </Listbox.Option>
    ))
  }, [items])

  return renderItems
}

export const RenderItems = TypedMemo(RenderItemsComponent)
