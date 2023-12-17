import { Button } from '@ui-kit/Button'
import React from 'react'

/** @module renderClickableIcon */

interface RenderClickableOptions {
  className?: string
}

/**
 * @description Функция позволяющая рендерить иконку в кликабельную иконку при помощи Button
 * @param {ReactNode} Icon - Передаваемая иконка
 * @param {function} onClick - Выполняемая функция при нажатии
 * @param {RenderClickableOptions} options - Дополнительные опции для рендеринга иконки под кнопку
 * @returns {ReactNode} - Возвращается классический ReactNode
 * */
export const renderClickableIcon =
  (
    Icon: React.ReactNode,
    onClick: () => void,
    options?: RenderClickableOptions
  ): React.ReactNode => {
    return (
      <Button
        fill={'clear'}
        onClick={onClick}
        className={options?.className}
      >
        {Icon}
      </Button>
    )
  }
