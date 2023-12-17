import React, { memo } from 'react'
import { ModalBase, type ModalBaseProps } from '../ModalBase/ModalBase'
import cls from './ModalImage.module.scss'

interface ModalImageProps extends ModalBaseProps {
  className?: string
  src: string
}

export const ModalImage: React.FC<ModalImageProps> = memo((props: ModalImageProps) => {
  const {
    src,
    ...other
  } = props

  return (
    <ModalBase
      {...other}
      classNameContent={cls.ContentImage}
    >
      <img
        src={src}
        alt={src}
        className={cls.Image}
      />
    </ModalBase>
  )
})
