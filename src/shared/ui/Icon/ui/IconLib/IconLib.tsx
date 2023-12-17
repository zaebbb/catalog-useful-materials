import { IconElement, type IconLibName } from '@lib/helpers/IconElement'
import { type Additional, classNames } from '@lib/helpers/classNames'
import { type IconBaseProps } from '@react-icons/all-files'
import React, { memo } from 'react'
import { mapperPadding, mapperSize } from '../../lib/mappers/mappers'
import { renderClickableIcon } from '../../lib/renderClickableIcon'
import { type IconPadding, type IconSize } from '../../lib/types/IconTypes'
import cls from '../../styles/IconCommon.module.scss'

/** @module IconLib */

/**
 * @interface IconAssetProps
 * @description Описывает передаваемые параметры в компонент иконки присутствующие в пакете react-icons
 * @description Наследует свойства иконок из библиотеки react-icons
 * */
interface IconLibProps extends IconBaseProps {
  /** Передаваемый класс в компонент, необязательный */
  className?: string
  /** Наименование иконки из хелпера IconElement */
  Icon: IconLibName
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
 * @description Компонент для отображения иконок которые присутствуют в react-icons
 * @param {IconLibProps} props - Пропсы типа IconLibProps
 * */
export const IconLib: React.FC<IconLibProps> = memo((props: IconLibProps) => {
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
    mapperSize(size),
    mapperPadding(padding),
  ]

  const commonAdditional: Additional = [
    className,
  ]

  if (!clickable || !onClick) {
    additional.push(...commonAdditional)
  }

  const classNameBuild = classNames('', {}, commonAdditional)

  const IconContent = (
    <IconElement
      className={
        classNames(
          cls.Icon,
          {},
          additional
        )
      }
      icon={Icon}
      {...other}
    />
  )

  if (clickable && onClick) {
    return renderClickableIcon(IconContent, onClick, {
      className: classNameBuild,
    })
  }

  return IconContent
})
