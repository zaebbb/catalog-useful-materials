import { type IconLibName } from '@lib/helpers/IconElement'
import { IconLib } from '@ui-kit/Icon'
import React, { memo } from 'react'
import {
  type DefaultOnChangeOptions,
  type InputFieldBaseProps,
  type InputType,
} from '../../lib/types/InputFieldBaseTypes'
import { InputFieldBase } from '../InputFieldBase/InputFieldBase'

export const InputFieldPassword: React.FC<InputFieldBaseProps<string, DefaultOnChangeOptions>> =
  memo((props: InputFieldBaseProps<string, DefaultOnChangeOptions>) => {
    const [type, setType] = React.useState<InputType>('password')
    const [iconType, setIcon] = React.useState<IconLibName>('IconEyeNotViewOutline')

    const onChangeType = React.useCallback(() => {
      if (type === 'password') {
        setType('text')
        setIcon('IconEyeNotViewOutline')
      } else if (type === 'text') {
        setType('password')
        setIcon('IconEyeViewOutline')
      }
    }, [type])

    const icon = React.useMemo(() => (
      <IconLib
        Icon={iconType}
        clickable
        onClick={onChangeType}
      />
    ), [iconType, onChangeType])

    React.useEffect(() => {
      if (type === 'password') {
        setIcon('IconEyeNotViewOutline')
      } else if (type === 'text') {
        setIcon('IconEyeViewOutline')
      }
    }, [type, iconType])

    return (
      <InputFieldBase
        {...props}
        type={type}
        icon={icon}
      />
    )
  })
