import { classNames, type Mods } from '@lib/helpers/classNames'
import { useDevice } from '@lib/hooks/useDevice'
import React, { memo } from 'react'
import cls from './AppPadding.module.scss'

/** @module AppPadding */

/**
 * @interface AppPaddingProps
 * @description Интерфейс описывающий входные параметры для компонента AppPadding
 * */
interface AppPaddingProps {
  /** Дочерние компоненты */
  children: React.ReactNode
  /** Передаваемый класс в компонент, необзательный */
  className?: string
}

/**
 * @description Компонент замеряющий и стандартизирующий padding всего приложения
 * @param {AppPaddingProps} props - Пропсы типа AppPaddingProps
 * */
export const AppPadding: React.FC<AppPaddingProps> = memo((props: AppPaddingProps) => {
  const {
    children,
    className,
  } = props

  const {
    isTablet,
    isMobile,
    isLaptop,
    isDesktop,
  } = useDevice()

  const mods: Mods = {
    [cls.AppPaddingDesktop]: isDesktop,
    [cls.AppPaddingLaptop]: isLaptop,
    [cls.AppPaddingTablet]: isTablet,
    [cls.AppPaddingMobile]: isMobile,
  }

  return (
    <div className={classNames('', mods, [className])}>
      {children}
    </div>
  )
})
