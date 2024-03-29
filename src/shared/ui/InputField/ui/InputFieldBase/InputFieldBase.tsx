import { TypedMemo } from '@lib/components/TypedMemo'
import { type Additional, classNames, type Mods } from '@lib/helpers/classNames'
import { IconLib } from '@ui-kit/Icon'
import React from 'react'
import {
  type DefaultOnChangeOptions,
  type InputFieldBaseProps,
} from '../../lib/types/InputFieldBaseTypes'
import cls from './InputFieldBase.module.scss'

const InputFieldBaseComponent = <T extends string, O extends DefaultOnChangeOptions>(
  props: InputFieldBaseProps<T, O>
) => {
  const {
    className,
    isReadonly = false,
    validation = '',
    success = '',
    placeholder = '',
    label = '',
    borderColor = 'default',
    borderSize = 'small',
    onChange,
    icon,
    value = '',
    type = 'text',
    name = '',
    isMax = false,
    isLoading = false,
    isRequired = false,
    description = '',
    ...other
  } = props

  const [valid, setValid] = React.useState('')
  const [successState, setSuccess] = React.useState('')
  const [iconState, setIcon] = React.useState(icon)

  const mods: Mods = {
    [cls.readonly]: isReadonly,
    [cls.loading]: isLoading,
    [cls.error]: Boolean(valid),
    [cls.success]: Boolean(successState),
    [cls.inputIcon]: Boolean(icon),
    [cls.max]: isMax,
    [cls.Required]: isRequired,
  }

  const additionalWrapper: Additional = [
    className,
  ]

  const additionalInput: Additional = [
    cls[`border-color-${borderColor}`],
    cls[`border-size-${borderSize}`],
  ]

  const onChangeHandler = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value as T, {
      name,
    } as O)

    if (validation || success) {
      setValid('')
      setSuccess('')
    }

    setIcon(icon)
    e.currentTarget.focus()
  }, [icon, name, onChange, success, validation])

  React.useEffect(() => {
    if (!isLoading && validation) {
      setValid(validation)
      setIcon(<IconLib size={'20'} Icon={'IconInfoCircleOutline'} className={cls.errorIcon} />)
    }

    if (!isLoading && !validation) {
      setValid('')
      setIcon(icon)
    }
  }, [icon, isLoading, validation])

  React.useEffect(() => {
    if (success) {
      setSuccess(success)
      setIcon(<IconLib size={'20'} Icon={'IconSuccessCircleOutline'} className={cls.successIcon} />)
    }

    if (!success) {
      setSuccess('')
      setIcon(icon)
    }
  }, [icon, success])

  React.useEffect(() => {
    if (icon) {
      setIcon(icon)
    }
  }, [icon])

  return (
    <label className={classNames(cls.InputField, mods, additionalWrapper)}>
      {label && <span className={cls.title}>{label}</span>}
      <div className={cls.InputWrapper}>
        <input
          {...other}
          className={classNames(cls.input, {}, additionalInput)}
          type={type}
          onChange={onChangeHandler}
          placeholder={placeholder}
          value={value}
          disabled={isReadonly || isLoading}
        />
        {iconState && <div className={cls.icon}>{iconState}</div>}
      </div>
      {description && <span className={cls.description}>{description}</span>}
      {valid && <span className={cls.validation}>{valid}</span>}
      {successState && <span className={cls.successInfo}>{successState}</span>}
    </label>
  )
}

export const InputFieldBase = TypedMemo(InputFieldBaseComponent)
