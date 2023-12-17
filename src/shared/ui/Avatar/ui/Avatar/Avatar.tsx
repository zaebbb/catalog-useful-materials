import Profile from '@assets/icons/Profile.png'
import { type Additional, classNames } from '@lib/helpers/classNames'
import React, { memo } from 'react'
import cls from './Avatar.module.scss'

/** @module Avatar */

/**
 * @type AvatarSize
 * @description Описывает размер изображения
 * @description small - Маленькое изображение
 * @description medium - Среднее изображение
 * @description large - Большое изображение
 * */
type AvatarSize = 'small' | 'medium' | 'large'

/**
 * @interface AvatarProps
 * @description Описывает передаваемые параметры в компонент
 * */
export interface AvatarProps {
  /** Передаваемый класс в компонент, необязательный */
  className?: string
  /** Ссылка на изображение, необязательный */
  src?: string
  /** Альтернативный текст изображения, необязательный */
  alt?: string
  /** Размер изображения, необязательный */
  size?: AvatarSize
}

/**
 * @description Компонент изображения с дизайном под приложение
 * @param {AvatarProps} props - Пропсы типа AvatarProps
 * */
export const Avatar: React.FC<AvatarProps> = memo((props: AvatarProps) => {
  const {
    className,
    src,
    alt,
    size = 'medium',
  } = props

  const additional: Additional = [
    className,
    cls[`size-${size}`],
  ]

  return (
    <img
      src={src ?? Profile}
      alt={alt}
      className={classNames(cls.Avatar, {}, additional)}
    />
  )
})
