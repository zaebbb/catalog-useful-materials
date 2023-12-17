import { getFileExtension } from '@ui-kit/InputField/lib/helpers/getFileExtension'

/** @module fileValidator */

/**
 * @interface FileValidatorOptions
 * @description Опции для валидатора передаваемые в качестве переключателей
 * */
export interface FileValidatorOptions {
  /** Провера на то что файл является изображением */
  isImage?: boolean
}

/**
 * @description Хелпер определяющий проверку файла на соответствие условиям переданным в опциях
 * @param {FileType} file - Передаваемый файл
 * @param {FileValidatorOptions} options - Передаваемые опции для валидатора
 * @returns boolean - Передается true в случае если валидация прошла и false если проверка не удалась
 * */
export const fileValidator = (file: FileType, options: FileValidatorOptions): boolean => {
  const extension = getFileExtension(file)

  if (options.isImage) {
    if (
      (
        extension !== 'png' &&
        extension !== 'jpeg' &&
        extension !== 'jpg'
      ) && !file.type.startsWith('image')
    ) {
      return false
    }

    return true
  }

  return false
}
