/** @module getFileExtension */

/**
 * @description Функция позволяющая получить наименование расширения файла содержащийся в File
 * @param {FileType} file - Главный передаваемый класс
 * @returns {(string|undefined)} - Наименование расширения или undefined если не было найдено расширение
 * */
export const getFileExtension = (file: FileType): string | undefined => {
  const fileName = file.name.toLowerCase()

  const fileNameArr = fileName.split('.')

  if (fileNameArr.length < 2) {
    return undefined
  }

  return fileNameArr[fileNameArr.length - 1]
}
