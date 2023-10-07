import React from 'react'
import { mappingTitleTag } from '../../model/lib/mappingTitleTag'
import { type TitleBaseProps } from '../../model/types/title'
import cls from './TitleBase.module.scss'
import { type Additional, classNames } from '@/shared/lib/helpers/classNames'

export const TitleBase: React.FC<TitleBaseProps> = React.memo((props: TitleBaseProps) => {
  const {
    className,
    variant = 'medium',
    content,
  } = props

  const TitleComponent = mappingTitleTag[variant]

  const additional: Additional = [
    className,
    cls[variant],
  ]

  return (
    <TitleComponent className={classNames('', {}, additional)}>
      {content}
    </TitleComponent>
  )
})
