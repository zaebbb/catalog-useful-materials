import { Skeleton } from '@ui-kit/Skeleton'
import React, { memo } from 'react'

/** @module AvatarSkeleton */

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
  /** Размер изображения, необязательный */
  size?: AvatarSize
}

/**
 * @description Компонент skeleton изображения
 * @param {AvatarProps} props - Пропсы типа AvatarProps
 * */
export const AvatarSkeleton: React.FC<AvatarProps> = memo((props: AvatarProps) => {
  const {
    className,
    size = 'medium',
  } = props

  switch (size) {
    case 'small':
      return <Skeleton className={className} width={'28px'} height={'28px'} radius={'50%'} />
    case 'medium':
      return <Skeleton className={className} width={'48px'} height={'48px'} radius={'50%'} />
    case 'large':
    default:
      return <Skeleton className={className} width={'68px'} height={'68px'} radius={'50%'} />
  }
})
