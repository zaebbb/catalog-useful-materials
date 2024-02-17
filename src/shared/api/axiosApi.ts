import axios, { type AxiosInstance } from 'axios'

/** @module axiosApi */

export interface BaseResponse<S, V> {
  success?: S
  validation?: V
}

export const STATUS_CODE_FORBIDDEN: number = 403
export const STATUS_CODE_NOT_FOUND: number = 404
export const STATUS_CODE_SUCCESS: number = 200

/**
 * Инстанс axios с предустановленными настройками под проект
 * @type {AxiosInstance}
 * */
export const $axiosApi = axios.create({
  baseURL: __API__,
  withCredentials: true,
  validateStatus: (status: number) => {
    return status < 500
  },
})

/**
 * @description Функция для инициализации axios для запросов вне серверного API
 * @param {string} url - Ссылка на хост вне серверного API
 * @returns {AxiosInstance} - Возвращается классический объект axios с предустановленными настройками
 * */
export const $axiosRemote = (url: string): AxiosInstance => {
  if (url.startsWith(__API__)) {
    return $axiosApi
  }

  return axios.create({
    validateStatus: (status: number) => {
      return status < 500
    },
  })
}
