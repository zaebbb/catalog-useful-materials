/** @module fileParser */

/**
 * @description Компонент разбирающий объект файла на классический объект
 * @param {FileType} file - Передаваемый файл
 * */
export const fileParser = (file: FileType): object => {
  return {
    ...file,
  }
}
