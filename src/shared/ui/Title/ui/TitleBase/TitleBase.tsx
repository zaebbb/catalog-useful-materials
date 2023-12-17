import { type Additional, classNames } from '@lib/helpers/classNames'
import React from 'react'
import { mappingTitleTag } from '../../model/lib/mappingTitleTag'
import { type TitleBaseProps } from '../../model/types/title'
import cls from './TitleBase.module.scss'

/** @module TitleBase */

/**
 * @description Базовый компонент для заголовков приложения
 * @param {TitleBaseProps} props - Пропсы типа TitleBaseProps
 * */
export const TitleBase: React.FC<TitleBaseProps> = React.memo((props: TitleBaseProps) => {
  const {
    className,
    variant = 'medium',
    children,
    align = 'left',
  } = props

  const TitleComponent = mappingTitleTag[variant]

  const additional: Additional = [
    className,
    cls[variant],
    cls[`align-${align}`],
  ]

  return (
    <TitleComponent className={classNames('', {}, additional)}>
      {children}
    </TitleComponent>
  )
})
