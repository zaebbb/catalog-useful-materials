import { type Additional, classNames, type Mods } from '@lib/helpers/classNames'
import { type TextareaFieldBaseProps } from '@ui-kit/TextareaField/lib/types/TextareaFieldBaseTypes'
import { EditorComponent } from '@ui-kit/TextareaField/ui/EditorComponent/EditorComponent'
import React, { memo } from 'react'
import cls from './TextareaFieldBase.module.scss'

const TextareaFieldBase: React.FC<TextareaFieldBaseProps> =
  memo((props: TextareaFieldBaseProps) => {
    const {
      className,
      onChange,
      success,
      validation,
      label = '',
      isReadonly = false,
      value = '',
      isLoading = false,
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
      [cls.max]: true,
    }

    const additional: Additional = [
      className,
    ]

    React.useEffect(() => {
      if (validation) {
        setValid(validation)
      }
    }, [validation])

    React.useEffect(() => {
      if (success) {
        setSuccess(success)
      }
    }, [success])

    React.useEffect(() => {
      onChange?.(stateValue)
    }, [onChange, stateValue])

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
  })

export default TextareaFieldBase
