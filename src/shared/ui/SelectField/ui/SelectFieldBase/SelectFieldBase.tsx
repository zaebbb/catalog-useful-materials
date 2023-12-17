import { Listbox, Transition } from '@headlessui/react'
import { TypedMemo } from '@lib/components/TypedMemo'
import { type Additional, classNames, type Mods } from '@lib/helpers/classNames'
import { IconLib } from '@ui-kit/Icon'
import { HStack, VStack } from '@ui-kit/Stack'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { RenderItems } from '../../lib/RenderItems/RenderItems'
import { RenderMultipleTabs } from '../../lib/RenderMultipleTabs/RenderMultipleTabs'
import { type SelectFieldBaseProps } from '../../lib/types/SelectFieldTypes'
import cls from './SelectFieldBase.module.scss'

/** @module SelectFieldBase */

/**
 * @description Компонент для работы select с помощью headless ui
 * @description Передается generic наследуемый от string
 * @param {SelectFieldBaseProps} props - Пропсы типа SelectFieldBaseProps
 * */
const SelectFieldBaseComponent = <T extends string>(props: SelectFieldBaseProps<T>) => {
  const {
    className,
    items = [],
    isMax = false,
    isLoading = false,
    validation = '',
    success = '',
    label = '',
    borderColor = 'default',
    borderSize = 'small',
    onChange,
    placeholder = '',
    isReadonly = false,
    selected = [],
    isMultiple = false,
    isSearch = false,
    searchPlaceholder = '',
    description = '',
  } = props
  const { t } = useTranslation('ui-kit')

  const [valid, setValid] = React.useState('')
  const [successState, setSuccess] = React.useState('')
  const [selectedState, setSelected] = React.useState(selected)
  const [searchItems, setSearchItems] = React.useState<SelectItems<T>>([])
  const [searchInput, setSearchInput] = React.useState<string>('')

  const mods: Mods = {
    [cls.readonly]: isReadonly,
    [cls.loading]: isLoading,
    [cls.error]: Boolean(valid),
    [cls.success]: Boolean(successState),
    [cls.max]: isMax,
  }

  const additionalWrapper: Additional = [
    className,
  ]

  const additionalSelect: Additional = [
    cls[`border-color-${borderColor}`],
    cls[`border-size-${borderSize}`],
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
    setSearchItems(items)
  }, [items])

  const onChangeHandler = React.useCallback((
    options: SelectFieldOption<T> & Array<SelectFieldOption<T>>
  ) => {
    if (isMultiple && Array.isArray(options)) {
      setSelected(options)
    } else {
      setSelected([options])
    }

    if (validation || success) {
      setValid('')
      setSuccess('')
    }
  }, [isMultiple, success, validation])

  const onChangeInputHandler = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }, [])

  React.useEffect(() => {
    onChange?.(selectedState)
  }, [onChange, selectedState])

  React.useEffect(() => {
    setSearchItems(items)

    if (searchInput) {
      setSearchItems(
        prev => prev.filter(
          item => item.content.toLowerCase().includes(searchInput.toLowerCase())
        )
      )
    }
  }, [items, searchInput])

  return (
    <VStack gap={20}>
      <div className={classNames(cls.SelectWrapper, mods, additionalWrapper)}>
        {label && <span className={cls.SelectLabel}>{label}</span>}
        <Listbox value={selectedState} onChange={onChangeHandler} multiple={isMultiple}>
          <Listbox.Button className={classNames(cls.SelectField, {}, additionalSelect)}>
            {(selectedState.length && !isMultiple) ? (
              <span>{selectedState[0].content}</span>
            ) : ''}

            {(!selectedState.length && !isMultiple && placeholder) && (
              <span>{placeholder}</span>
            )}

            {(isMultiple && placeholder) && (
              <span>{placeholder}</span>
            )}

            <IconLib
              size={'20'}
              className={cls.SelectIcon}
              Icon={'IconArrowDownLine'}
            />

            {valid && (
              <IconLib
                size={'20'}
                className={cls.SelectIconError}
                Icon={'IconInfoCircleOutline'}
              />
            )}

            {successState && (
              <IconLib
                size={'20'}
                className={cls.SelectIconSuccess}
                Icon={'IconSuccessCircleOutline'}
              />
            )}
          </Listbox.Button>

          <Transition
            as={React.Fragment}
            enter={cls.AnimationEnter}
            enterFrom={cls.AnimationEnterFrom}
            enterTo={cls.AnimationEnterTo}
            leave={cls.AnimationLeave}
            leaveFrom={cls.AnimationLeaveFrom}
            leaveTo={cls.AnimationLeaveTo}
          >
            <Listbox.Options className={classNames(cls.SelectOptions, {}, additionalSelect)}>
              {isSearch && (
                <input
                  type="text"
                  value={searchInput}
                  onChange={onChangeInputHandler}
                  className={classNames(cls.SelectOption, {}, [cls.SearchInput])}
                  placeholder={searchPlaceholder}
                />
              )}

              {isSearch && !searchItems.length && (
                <p
                  className={classNames(cls.SelectOption, {}, [cls.OptionText])}
                >
                  {t('select-search-not-found')}
                </p>
              )}

              <RenderItems
                items={isSearch ? searchItems : items}
              />
            </Listbox.Options>
          </Transition>
        </Listbox>
        {description && <span className={cls.description}>{description}</span>}
        {valid && <span className={cls.validation}>{valid}</span>}
        {successState && <span className={cls.successInfo}>{successState}</span>}
      </div>
      {isMultiple && (
        <HStack gap={16}>
          <RenderMultipleTabs setSelected={setSelected} items={selectedState} />
        </HStack>
      )}
    </VStack>
  )
}

export const SelectFieldBase = TypedMemo(SelectFieldBaseComponent)
