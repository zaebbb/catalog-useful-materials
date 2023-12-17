/** @module getFilesName */

/**
 * @description Функция достающая наименования файла из массива объектов File
 * @param {Files} files - Передаваемые файлы
 * @returns {Array<string>} - Массив состоящий из наименований файлов
 * */
export const getFilesName = (files: Files): string[] => {
  const fileNames: string[] = []

  files.forEach(fileData => {
    fileNames.push(fileData.file.name)
  })

  return fileNames
}
