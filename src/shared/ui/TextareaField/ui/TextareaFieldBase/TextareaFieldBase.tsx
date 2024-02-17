import { TypedMemo } from '@lib/components/TypedMemo'
import { type Additional, classNames, type Mods } from '@lib/helpers/classNames'
import { type DefaultOnChangeOptions } from '@ui-kit/InputField'
import { type TextareaFieldBaseProps } from '@ui-kit/TextareaField/lib/types/TextareaFieldBaseTypes'
import { EditorComponent } from '@ui-kit/TextareaField/ui/EditorComponent/EditorComponent'
import React from 'react'
import cls from './TextareaFieldBase.module.scss'

const TextareaFieldBaseComponent = <O extends DefaultOnChangeOptions>(
  props: TextareaFieldBaseProps<O>
) => {
  const {
    className,
    onChange,
    success,
    validation,
    label = '',
    isReadonly = false,
    value = '',
    name = '',
    isLoading = false,
    isRequired = false,
    isMax = true,
    height = 500,
    description = '',
    mode = 'default',
  } = props

  const [stateValue, setValue] = React.useState<string>(value)

  const [valid, setValid] = React.useState('')
  const [successState, setSuccess] = React.useState('')

  const fileMessageClean = React.useCallback(() => {
    if (validation || success) {
      setValid('')
      setSuccess('')
    }
  }, [success, validation])

  const mods: Mods = {
    [cls.readonly]: isReadonly,
    [cls.loading]: isLoading,
    [cls.error]: Boolean(valid),
    [cls.success]: Boolean(successState),
    [cls.max]: isMax,
    [cls.Required]: isRequired,
  }

  const additional: Additional = [
    className,
  ]

  React.useEffect(() => {
    if (!isLoading && validation) {
      setValid(validation)
    }
  }, [isLoading, validation])

  React.useEffect(() => {
    if (!isLoading && success) {
      setSuccess(success)
    }
  }, [isLoading, success])

  React.useEffect(() => {
    onChange?.(stateValue, {
      name,
    } as O)
  }, [name, onChange, stateValue])

  React.useEffect(() => {
    if (value) {
      setValue(value)
    }
  }, [value])

  return (
    <label className={classNames(cls.TextareaFieldBase, mods, additional)}>
      {label && <span className={cls.title}>{label}</span>}
      <div className={cls.InputWrapper}>
        <EditorComponent
          value={stateValue}
          height={height}
          setValue={setValue}
          fileMessageClean={fileMessageClean}
          mode={mode}
        />
      </div>
      {description && <span className={cls.description}>{description}</span>}
      {valid && <span className={cls.validation}>{valid}</span>}
      {successState && <span className={cls.successInfo}>{successState}</span>}
    </label>
  )
}

export default TypedMemo(TextareaFieldBaseComponent)
