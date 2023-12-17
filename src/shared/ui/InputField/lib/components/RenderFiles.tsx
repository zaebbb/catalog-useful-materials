import { fileValidator } from '@lib/helpers/FileValidator'
import { classNames } from '@lib/helpers/classNames'
import { RenderImage } from '@ui-kit/InputField/lib/components/RenderImage'
import { HStack } from '@ui-kit/Stack'
import { Text } from '@ui-kit/Text'
import React from 'react'
import cls from '../../ui/InputFieldFile/InputFieldFile.module.scss'
import { getFileExtension } from '../helpers/getFileExtension'
import { RemoveIcon } from './RemoveIcon'

/** @module RenderFiles */

/**
 * @interface RenderFilesProps
 * @description Описывает передаваемые параметры в компонент
 * */
export interface RenderFilesProps {
  /** Передаваемый массив объектов в формате File */
  files: Files
  onDelete?: (key: string) => void
}

/**
 * @description Компонент обрабатывающий входящие файлы в классический JSX
 * @param {RenderFilesProps} props - Пропсы типа TextProps
 * */
export const RenderFiles: React.FC<RenderFilesProps> =
  React.memo((props: RenderFilesProps): React.ReactNode => {
    const {
      files,
      onDelete,
    } = props

    return React.useMemo((): React.ReactNode => {
      return files.map(({ file, key }): React.ReactNode => {
        const extension = getFileExtension(file)

        if (!fileValidator(file, { isImage: true })) {
          return (
            <HStack
              className={classNames(cls.ExtensionName, {}, [cls.FileWrapper])}
              key={key}
              align={'center'}
              justify={'center'}
            >
              <RemoveIcon onDelete={onDelete} keyFile={key} />
              <Text type={'small'}>
                .{extension}
              </Text>
            </HStack>
          )
        }

        return (
          <RenderImage
            file={file}
            onDelete={onDelete}
            keyFile={key}
            key={key}
          />
        )
      })
    }, [files, onDelete])
  })
