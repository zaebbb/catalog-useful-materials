import { classNames } from '@lib/helpers/classNames'
import { AppPadding } from '@ui-kit/AppPadding'
import React, { memo } from 'react'
import cls from './Page.module.scss'

/** @module Page */

/**
 * @interface PageProps
 * @description Описывает передаваемые параметры в компонент
 * */
interface PageProps extends React.PropsWithChildren {
  /** Передаваемый класс в компонент, необязательный */
  className?: string
  /** Название страницы */
  title: string
}

/**
 * @description Компонент для обертки страниц в компонент без необходимости использования AppPadding
 * @param {PageProps} props - Пропсы типа PageProps
 * */
export const Page: React.FC<PageProps> = memo((props: PageProps) => {
  const {
    className,
    children,
    title,
  } = props

  document.title = title

  return (
    <AppPadding className={classNames(cls.Page, {}, [className])}>
      {children}
    </AppPadding>
  )
})
