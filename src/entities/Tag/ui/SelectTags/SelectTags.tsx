import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import {
  getIdsMultipleSelect,
  SelectAsyncField,
} from '@ui-kit/SelectField'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getRemotePathSelector, getSelectedSelector } from '../../model/selectors/TagSelector'
import { TagActions } from '../../model/slice/TagSlice'

export interface SelectTagsProps {
  className?: string
  isLoading?: boolean
  isMax?: boolean
  isRequired?: boolean
  validation?: string
  label?: string
  placeholder?: string
  onChange?: () => void
}

export const SelectTags: React.FC<SelectTagsProps> =
  memo((props: SelectTagsProps) => {
    const {
      className,
      isLoading,
      validation,
      isMax,
      label,
      placeholder,
      isRequired = true,
      onChange,
    } = props
    const { t } = useTranslation('tag')
    const remotePath = useSelector(getRemotePathSelector)
    const selected = useSelector(getSelectedSelector)
    const dispatch = useAppDispatch()

    const onChangeHandler = React.useCallback((
      items: SelectItems<string>
    ) => {
      dispatch(TagActions.setTags(items))
      dispatch(TagActions.setTagsIds(getIdsMultipleSelect(items)))
      onChange?.()
    }, [dispatch, onChange])

    return (
      <SelectAsyncField
        className={className}
        label={label ?? t('label')}
        placeholder={placeholder ?? t('placeholder')}
        remotePath={remotePath}
        onChange={onChangeHandler}
        isMultiple
        isMax={isMax}
        isLoading={isLoading}
        validation={validation}
        selected={selected}
        isRequired={isRequired}
        isSearch
        searchPlaceholder={t('search-placeholder')}
      />
    )
  })
