import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { SelectAsyncField } from '@ui-kit/SelectField'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  getRemotePathSelector,
  getSelectedCategorySelector,
} from '../../model/selectors/CategorySelector'
import { CategoryActions } from '../../model/slice/CategorySlice'

export interface SelectCategoryProps {
  className?: string
  isLoading?: boolean
  isRequired?: boolean
  onChange?: () => void
  isMax?: boolean
  validation?: string
  label?: string
  placeholder?: string
}

export const SelectCategory: React.FC<SelectCategoryProps> =
  memo((props: SelectCategoryProps) => {
    const {
      className,
      isLoading,
      validation,
      label,
      placeholder,
      isMax,
      isRequired = true,
      onChange,
    } = props
    const { t } = useTranslation('category')
    const remotePath = useSelector(getRemotePathSelector)
    const selected = useSelector(getSelectedCategorySelector)
    const dispatch = useAppDispatch()

    const onChangeHandler = React.useCallback((
      items: SelectItems<string>
    ) => {
      dispatch(CategoryActions.setCurrentCategory(items[0]))
      onChange?.()
    }, [dispatch, onChange])

    return (
      <SelectAsyncField
        className={className}
        label={label ?? t('label')}
        placeholder={placeholder ?? t('placeholder')}
        remotePath={remotePath}
        onChange={onChangeHandler}
        isLoading={isLoading}
        isMax={isMax}
        validation={validation}
        selected={selected ? [selected] : []}
        isRequired={isRequired}
        isSearch
        searchPlaceholder={t('search-placeholder')}
      />
    )
  })
