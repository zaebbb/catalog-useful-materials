import { classNames } from '@lib/helpers/classNames'
import React, { memo } from 'react'
import cls from './Skeleton.module.scss'

interface SkeletonProps {
  className?: string
  width?: string
  height?: string
  radius?: string
  isMaxWidth?: boolean
}

export const Skeleton: React.FC<SkeletonProps> = memo((props: SkeletonProps) => {
  const {
    className,
    radius = '8px',
    height = '40px',
    width = '100%',
    isMaxWidth = true,
  } = props

  const styles: React.CSSProperties = {
    borderRadius: radius,
    width: isMaxWidth ? '100%' : width,
    height,
    maxWidth: isMaxWidth ? width : 'none',
  }

  return (
    <div
      className={classNames(cls.Skeleton, {}, [className])}
      style={styles}
    />
  )
})
