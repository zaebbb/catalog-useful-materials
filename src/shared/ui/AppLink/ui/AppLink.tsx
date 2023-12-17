import { classNames } from '@lib/helpers/classNames'
import React, { memo } from 'react'
import { NavLink, type LinkProps } from 'react-router-dom'
import cls from './AppLink.module.scss'

/** @module AppLink */

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
    ...other
  } = props

  return (
    <NavLink
      to={to}
      target={isBlank ? '_blank' : ''}
      className={
        ({ isActive }) => classNames(
          cls.AppLink, { [activeClassName]: isActive }, [className]
        )
      }
      {...other}
    >
      {children}
    </NavLink>
  )
})
