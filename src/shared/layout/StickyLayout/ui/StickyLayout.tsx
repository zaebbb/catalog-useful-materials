import { classNames, type Mods } from '@lib/helpers/classNames'
import React, { memo } from 'react'
import { type StickyLayoutProps } from '../model/types/StickyLayout'
import cls from './StickyLayout.module.scss'

/** @module StickyLayout */

/**
 * @description Каркас раздела с 3 частями контента
 * @param {StickyLayoutProps} props - Пропсы типа StickyLayoutProps
 * */
export const StickyLayout: React.FC<StickyLayoutProps> = memo((props: StickyLayoutProps) => {
  const {
    className,
    ContentLeft,
    Content,
    ContentRight,
  } = props

  const mods: Mods = {
    [cls.LeftSidebarExist]: Boolean(ContentLeft && !ContentRight),
    [cls.RightSidebarExist]: Boolean(!ContentLeft && ContentRight),
    [cls.AllSidebarExist]: Boolean(ContentLeft && ContentRight),
  }

  return (
    <div className={classNames(cls.StickyLayout, mods, [className])}>
      {ContentLeft && <div className={cls.LeftSidebar}>{ContentLeft}</div>}
      <div className={cls.Content}>{Content}</div>
      {ContentRight && <div className={cls.RightSidebar}>{ContentRight}</div>}
    </div>
  )
})
