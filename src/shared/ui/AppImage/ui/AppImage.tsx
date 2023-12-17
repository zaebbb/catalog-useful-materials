import { classNames, type Mods } from '@lib/helpers/classNames'
import { ModalImage } from '@ui-kit/Modal'
import React, { memo } from 'react'
import cls from './AppImage.module.scss'

interface AppImageProps {
  className?: string
  src: string
  alt?: string
  isMax?: boolean
}

export const AppImage: React.FC<AppImageProps> = memo((props: AppImageProps) => {
  const {
    className,
    alt,
    isMax,
    src,
  } = props

  const [isOpenImage, setIsOpenImage] = React.useState<boolean>(false)

  const mods: Mods = {
    [cls.max]: isMax,
  }

  const onClickImageHandler = React.useCallback(() => {
    setIsOpenImage(true)
  }, [])

  const onClose = React.useCallback(() => {
    setIsOpenImage(false)
  }, [])

  return (
    <div className={classNames(cls.AppImage, mods, [className])}>
      <img
        src={src}
        alt={alt}
        onClick={onClickImageHandler}
        className={cls.Image}
      />

      <ModalImage
        src={src}
        isOpen={isOpenImage}
        onClose={onClose}
      />
    </div>
  )
})
