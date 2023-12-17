import { TypedMemo } from '@lib/components/TypedMemo'
import { IconLib } from '@ui-kit/Icon'
import { Tab } from '@ui-kit/Tabs'
import React from 'react'
import cls from '../..//ui/SelectFieldBase/SelectFieldBase.module.scss'

/** @module RenderMultipleTabs */

export interface RenderMultipleTabsProps<T extends string> {
  /** Элементы (стандартные option) select */
  items: SelectItems<T>
  setSelected: React.Dispatch<React.SetStateAction<SelectItems<T>>>
}

const RenderMultipleTabsComponent = <T extends string>(props: RenderMultipleTabsProps<T>) => {
  const {
    items,
    setSelected,
  } = props

  const onRemoveSelectedItems = React.useCallback((code: string) => {
    setSelected(prev => {
      return prev.filter(item => item.code !== code)
    })
  }, [setSelected])

  const IconClose = React.useCallback((code: string) => (
    <IconLib
      Icon={'IconCloseOutline'}
      clickable
      className={cls.SelectCloseIconTabs}
      size={'24'}
      onClick={() => { onRemoveSelectedItems(code) }}
    />
  ), [onRemoveSelectedItems])

  const renderItems: React.ReactNode = React.useMemo(() => {
    return items.map((option) => (
      <Tab
        key={option.code}
        tabKey={option.code}
        iconRight={IconClose(option.code)}
      >
        {option.content}
      </Tab>
    ))
  }, [IconClose, items])

  return renderItems
}

export const RenderMultipleTabs = TypedMemo(RenderMultipleTabsComponent)
