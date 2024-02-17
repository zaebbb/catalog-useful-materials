import { classNames, type Mods } from '@lib/helpers/classNames'
import { isLinkActive } from '@lib/helpers/isLinkActive'
import React, { memo } from 'react'
import { NavLink, type LinkProps } from 'react-router-dom'
import cls from './AppLink.module.scss'

/** @module AppLink */

export type AppLinkMode = 'default' | 'tag'

/**
 * @interface AppLinkProps
 * @description Тип описывающий входные параметры для компонента AppLink
 * */
export interface AppLinkProps extends LinkProps {
  /** Передаваемый класс в компонент */
  className?: string
  /** Накладываемый класс в случае если страница на которой находимся соответствует указанной ссылке */
  activeClassName?: string
  /** Открывать ссылку в новом окне или нет */
  isBlank?: boolean
  /** Тип ссылки, использование Link или тега <a> */
  mode?: AppLinkMode
}

/**
 * @description Компонент ссылки с доп. параметрами
 * @param {AppLinkProps} props - Пропсы типа AppLinkProps
 * */
export const AppLink: React.FC<AppLinkProps> = memo((props: AppLinkProps) => {
  const {
    to,
    className,
    children,
    activeClassName = '',
    isBlank = false,
    mode = 'default',
    ...other
  } = props

  const mods: Mods = {
    [activeClassName]: isLinkActive(String(to)),
  }

  if (mode === 'tag') {
    return (
      <a
        href={String(to)}
        target={isBlank ? '_blank' : ''}
        rel="noreferrer"
        className={className}
      >
        {children}
      </a>
    )
  }

  return (
    <NavLink
      to={to}
      target={isBlank ? '_blank' : ''}
      className={classNames(cls.AppLink, mods, [className])}
      {...other}
    >
      {children}
    </NavLink>
  )
})
