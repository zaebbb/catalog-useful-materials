import { type ReduxStoreWithManager, type StateSchemaKey } from '@app/providers/StoreProvider'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import React from 'react'
import { useStore } from 'react-redux'
import { type DynamicReducerLoaderProps } from '../lib/types/types'

/** @module DynamicReducerLoader */

/**
 * @description Компонент добавляющий в глобальный store редюсеры при монтировании компонента
 * @param {DynamicReducerLoaderProps} props - Пропсы типа DynamicReducerLoaderProps
 * */
export const DynamicReducerLoader: React.FC<DynamicReducerLoaderProps> =
  (props: DynamicReducerLoaderProps) => {
    const {
      reducers,
      children,
      removeAfterUnmount = true,
    } = props

    const store = useStore() as ReduxStoreWithManager
    const dispatch = useAppDispatch()

    React.useEffect(() => {
      const mountedReducers = store.reducerManager.getMountedReducers()

      Object.entries(reducers).forEach(([keyName, reducer]) => {
        const mounted = mountedReducers[keyName as StateSchemaKey]

        if (!mounted) {
          store.reducerManager.add(keyName as StateSchemaKey, reducer)
          dispatch({ type: `@INIT ${keyName} reducer` })
        }
      })

      return () => {
        Object.entries(reducers).forEach(([keyName]) => {
          if (removeAfterUnmount) {
            store.reducerManager.remove(keyName as StateSchemaKey)
            dispatch({ type: `@DESTROY ${keyName} reducer` })
          }
        })
      }
      // eslint-disable-next-line
    }, [])

    return (
      <>
        {children}
      </>
    )
  }
