import { classNames } from '@lib/helpers/classNames'
import React, { memo } from 'react'
import cls from './Overlay.module.scss'

interface OverlayProps {
  className?: string
  onClick?: () => void
}

export const Overlay: React.FC<OverlayProps> = memo((props: OverlayProps) => {
  const {
    className,
    onClick,
  } = props

  const onClickHandler = React.useCallback(() => {
    onClick?.()
  }, [onClick])

  return (
    <div
      onClick={onClickHandler}
      className={classNames(cls.Overlay, {}, [className])}
    />
  )
})
