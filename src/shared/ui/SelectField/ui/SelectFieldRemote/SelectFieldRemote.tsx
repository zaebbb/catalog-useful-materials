import { $axiosApi, type BaseResponse } from '@api/axiosApi'
import { TypedMemo } from '@lib/components/TypedMemo'
import { SelectFieldBase } from '@ui-kit/SelectField/ui/SelectFieldBase/SelectFieldBase'
import React from 'react'
import {
  type SelectFieldBaseProps,
} from '../../lib/types/SelectFieldTypes'

/** @module SelectFieldBase */

export interface SelectFieldRemoteProps<T extends string>
  extends Omit<SelectFieldBaseProps<T>, 'items'> {
  remotePath: string
}

export type SelectRemoteResponse<T extends string> = BaseResponse<SelectItems<T>, void>

/**
 * @description Компонент для работы select получающий удаленный данные
 * @description Передается generic наследуемый от string
 * @param {SelectFieldBaseProps} props - Пропсы типа SelectFieldBaseProps
 * */
const SelectFieldRemoteComponent = <T extends string>(props: SelectFieldRemoteProps<T>) => {
  const {
    remotePath = '',
    ...other
  } = props

  const [
    remoteItems,
    setRemoteItems,
  ] = React.useState<SelectItems<T>>([])
  const [
    initializeRemoteData,
    setInitializeRemoteData,
  ] = React.useState<boolean>(false)

  const onHandlerGetRemoteData = React.useCallback(async () => {
    if (!remotePath) {
      return
    }

    const { data } = await $axiosApi.get<SelectRemoteResponse<T>>(remotePath)
    if (!data?.success) {
      setRemoteItems([])
    } else {
      setRemoteItems(data.success)
    }
  }, [remotePath])

  React.useEffect(() => {
    if (!initializeRemoteData) {
      void onHandlerGetRemoteData()
      setInitializeRemoteData(true)
    }
  }, [initializeRemoteData, onHandlerGetRemoteData])

  return (
    <SelectFieldBase
      {...other}
      items={remoteItems}
    />
  )
}

export const SelectFieldRemote = TypedMemo(SelectFieldRemoteComponent)
