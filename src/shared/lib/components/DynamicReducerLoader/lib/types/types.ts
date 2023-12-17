import { type StateSchema, type StateSchemaKey } from '@app/providers/StoreProvider'
import { type Reducer } from '@reduxjs/toolkit'
import type React from 'react'

/**
 * @type ReducerList
 * @description Преобразование ключей с неопределенными типом к типу StateSchemaKey
 * @description Тип value исходит из value StateSchema с исключением null и undefined значений  оборачиваемый в тип Reducer
 * */
export type ReducerList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

/**
 * @type ReducerEntry
 * @description Массив из значения StateSchemaKey и Reducer
 * */
export type ReducerEntry = [StateSchemaKey, Reducer]

/**
 * @interface DynamicReducerLoaderProps
 * @description Наследуется от типа react пробрасывающего children свойство
 * @description Содержит список редюсеров приложения
 * @description Содержит boolean параметр указывающей на удаление подключенных редюсеров после размонтирования компонента
 * */
export interface DynamicReducerLoaderProps extends React.PropsWithChildren {
  /** Список монтируемых редюсеров */
  reducers: ReducerList
  /** Параметр указывающий на удаление редюсеров после размонтирования компонента, необязательный */
  removeAfterUnmount?: boolean
}
