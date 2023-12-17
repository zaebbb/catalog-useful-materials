import IconLogo from '@assets/icons/Logo.png'
import { type Additional, classNames } from '@lib/helpers/classNames'
import { getRouteMain } from '@lib/router'
import { AppLink } from '@ui-kit/AppLink'
import { HStack } from '@ui-kit/Stack'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './Logo.module.scss'

/** @module Logo */

/**
 * @type LogoColor
 * @description Описывает цвет логотипа
 * @description default - Цвет по умолчанию
 * @description white - Белый цвет
 * */
type LogoColor = 'default' | 'white'

/**
 * @interface LogoProps
 * @description Описывает передаваемые параметры в компонент
 * */
interface LogoProps {
  /** Передаваемый класс в компонент, необязательный */
  className?: string
  /** Цвет логотипа, необязательный */
  color?: LogoColor
}

/**
 * @description Компонент отображения логотипа приложения
 * @param {LogoProps} props - Пропсы типа LogoProps
 * */
export const Logo: React.FC<LogoProps> = memo((props: LogoProps) => {
  const {
    className,
    color = 'default',
  } = props

  const { t } = useTranslation()

  const additional: Additional = [
    cls[`color-${color}`],
    className,
  ]

  return (
    <AppLink to={getRouteMain()}>
      <HStack gap={12} className={classNames('', {}, additional)} align={'center'}>
        <img
          src={IconLogo}
          alt={t('app-name')}
          className={cls.LogoIcon}
        />

        <p className={cls.LogoText}>
          {t('app-name')}
        </p>
      </HStack>
    </AppLink>
  )
})
