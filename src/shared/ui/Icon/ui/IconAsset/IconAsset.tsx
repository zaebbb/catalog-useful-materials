import { type Additional, classNames } from '@lib/helpers/classNames'
import { mapperPadding, mapperSize } from '@ui-kit/Icon/lib/mappers/mappers'
import React, { memo } from 'react'
import { renderClickableIcon } from '../../lib/renderClickableIcon'
import { type IconPadding, type IconSize } from '../../lib/types/IconTypes'
import cls from '../../styles/IconCommon.module.scss'

/** @module IconAsset */

/**
 * @interface IconAssetProps
 * @description Описывает передаваемые параметры в компонент иконки скачанной в проект
 * @description Наследует свойства для svg при помощь React типов
 * */
interface IconAssetProps extends React.SVGProps<SVGSVGElement> {
  /** Передаваемый класс в компонент, необязательный */
  className?: string
  /** Иконка подключенная через import */
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  /** Указатель будет ли она кликабельная, необязательный */
  clickable?: boolean
  /** В случае если иконка кликабельная передающийся в нее callback, срабатывающий при нажатии, необязательный */
  onClick?: () => void
  /** Размер иконки, необязательный */
  size?: IconSize
  /** Padding иконки, необязательный */
  padding?: IconPadding
}

/**
 * @description Компонент для отображения иконок которые скачаны и присутствуют в проекте
 * @param {IconAssetProps} props - Пропсы типа IconAssetProps
 * */
export const IconAsset = memo((props: IconAssetProps) => {
  const {
    className,
    Icon,
    clickable,
    onClick,
    size = '16',
    padding = '0',
    ...other
  } = props

  const additional: Additional = [
    className,
    mapperSize(size),
    mapperPadding(padding),
  ]

  const IconContent = (
    <Icon
      className={classNames(cls.Icon, {}, additional)}
      {...other}
    />
  )

  if (clickable && onClick) {
    return renderClickableIcon(IconContent, onClick)
  }

  return IconContent
})
