import { type AppDispatch } from '@app/providers/StoreProvider'
import { useDispatch } from 'react-redux'

/** @module useAppDispatch */

/**
 * @description Метод передающий классический redux dispatch с настроенной типизацией return type на createReduxStore
 * @return Возвращает useDispatch
 * */
export const useAppDispatch = () => useDispatch<AppDispatch>()
