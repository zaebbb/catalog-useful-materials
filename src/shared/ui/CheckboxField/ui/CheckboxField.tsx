import { type Mods, classNames } from '@lib/helpers/classNames'
import { IconLib } from '@ui-kit/Icon'
import { HStack, VStack } from '@ui-kit/Stack'
import React, { memo } from 'react'
import cls from './CheckboxField.module.scss'

interface CheckboxFieldProps {
  className?: string
  checked?: boolean
  onChange?: (value: boolean) => void
  label?: React.ReactNode
  validation?: string
  success?: string
  isReadonly?: boolean
  isLoading?: boolean
  description?: React.ReactNode
}

export const CheckboxField: React.FC<CheckboxFieldProps> = memo((props: CheckboxFieldProps) => {
  const {
    className,
    onChange,
    success = '',
    validation = '',
    checked = false,
    label = '',
    isLoading = false,
    isReadonly = false,
    description = '',
  } = props

  const [isChecked, setIsChecked] = React.useState(checked)
  const [valid, setValid] = React.useState('')
  const [successState, setSuccess] = React.useState('')

  const mods: Mods = {
    [cls.readonly]: isReadonly,
    [cls.loading]: isLoading,
    [cls.error]: Boolean(valid),
    [cls.success]: Boolean(successState),
    [cls.squareActive]: isChecked,
  }

  const onClickHandler = React.useCallback(() => {
    if (isReadonly || isLoading) {
      return
    }

    if (validation || success) {
      setValid('')
      setSuccess('')
    }

    setIsChecked(prev => !prev)
    onChange?.(!isChecked)
  }, [isChecked, isLoading, isReadonly, onChange, success, validation])

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

  return (
    <VStack gap={0}>
      <HStack
        align={'center'}
        gap={12}
        className={classNames(
          cls.CheckboxField,
          mods,
          [className]
        )}
        onClick={onClickHandler}
      >
        <HStack
          justify={'center'}
          align={'center'}
          className={cls.CheckboxSquare}
        >
          <IconLib
            Icon={'IconSuccessOutline'}
            size={'14'}
          />
        </HStack>
        <div className={cls.CheckboxLabel}>{label}</div>
      </HStack>
      {description && <span className={cls.description}>{description}</span>}
      {valid && <span className={cls.validation}>{valid}</span>}
      {successState && <span className={cls.successInfo}>{successState}</span>}
    </VStack>
  )
})
