import { $axiosRemote } from '../../../api/axiosApi'

/** @module WorkingRemoteFiles */

/**
 * @description Метод получает ссылку на файл и возвращает его наименование
 * @param {string} url - Ссылка на файл
 * @returns {string} Наименование файла после разбиения на отдельные части
 * */
export const getFileName = (url: string): string => {
  const parseUrl = url.split('/')
  return parseUrl[parseUrl.length - 1]
}

/**
 * @description Метод который делает запрос к ссылке, достает содержание файла в виде blob, и возвращает экземпляр файла
 * @param {string} url - Ссылка на файл
 * @returns {Promise<FileType>} Возвращается Promise внутри которого содержится экземпляр объекта File
 * */
export const getFileDataFromUrl = async (url: string): Promise<FileType> => {
  const response = await $axiosRemote(url).get(url, {
    responseType: 'blob',
  })

  const data = response.data
  const headers = response.headers

  return new File([data], getFileName(url), {
    type: headers['content-type'],
  })
}
