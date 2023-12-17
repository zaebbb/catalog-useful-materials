import { ModalImage } from '@ui-kit/Modal'
import React from 'react'
import cls from '../../ui/InputFieldFile/InputFieldFile.module.scss'
import { RemoveIcon } from './RemoveIcon'

/** @module RenderImage */

/**
 * @interface RenderImageProps
 * @description Описывает передаваемые параметры в компонент
 * */
export interface RenderImageProps {
  file: FileType
  keyFile: string
  onDelete?: (key: string) => void
}

/**
 * @description Компонент для отображения изображения в input file
 * @param {RenderImageProps} props - Пропсы типа TextProps
 * */
export const RenderImage: React.FC<RenderImageProps> =
  React.memo((props: RenderImageProps): React.ReactNode => {
    const {
      file,
      keyFile,
      onDelete,
    } = props

    const [isOpenModalImage, setIsOpenModalImage] = React.useState(false)

    const fileDataUrl = URL.createObjectURL(file)

    const onOpenFullImageHandler = React.useCallback(() => {
      setIsOpenModalImage(true)
    }, [])

    const onCloseFullImageHandler = React.useCallback(() => {
      setIsOpenModalImage(false)
    }, [])

    return (
      <div key={keyFile} className={cls.FileWrapper}>
        <RemoveIcon onDelete={onDelete} keyFile={keyFile} />
        <img
          src={fileDataUrl}
          alt={file.name}
          className={cls.LoadFile}
          onClick={onOpenFullImageHandler}
        />
        <ModalImage
          src={fileDataUrl}
          isOpen={isOpenModalImage}
          onClose={onCloseFullImageHandler}
        />
      </div>
    )
  })
