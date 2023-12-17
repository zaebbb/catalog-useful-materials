import { IconLib } from '@ui-kit/Icon'
import React from 'react'
import cls from '../../ui/InputFieldFile/InputFieldFile.module.scss'

/** @module RemoveIcon */

/**
 * @interface RemoveIconProps
 * @description Описывает передаваемые параметры в компонент
 * */
export interface RemoveIconProps {
  /** Ключ удаляемого файла */
  keyFile?: string
  /** Функция извне в которую попадает ключ */
  onDelete?: (key: string) => void
}

/**
 * @description Компонент удаляющий определенный файл по ключу
 * @param {TextProps} props - Пропсы типа TextProps
 * */
export const RemoveIcon: React.FC<RemoveIconProps> =
  React.memo((props: RemoveIconProps): React.ReactNode => {
    const {
      keyFile = '',
      onDelete,
    } = props

    const removeFileHandler = React.useCallback((key: string) => {
      onDelete?.(key)
    }, [onDelete])

    return (
      <IconLib
        Icon={'IconCloseOutline'}
        size={'24'}
        className={cls.RemoveFile}
        clickable
        onClick={() => { removeFileHandler(keyFile) }}
      />
    )
  })
