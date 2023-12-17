import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { SelectAsyncField } from '@ui-kit/SelectField'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getRemotePathSelector } from '../../model/selectors/CategorySelector'
import { CategoryActions } from '../../model/slice/CategorySlice'

export interface SelectCategoryProps {
  className?: string
  isLoading?: boolean
  validation?: string
}

export const SelectCategory: React.FC<SelectCategoryProps> =
  memo((props: SelectCategoryProps) => {
    const {
      className,
      isLoading,
      validation,
    } = props
    const { t } = useTranslation('category')
    const remotePath = useSelector(getRemotePathSelector)
    const dispatch = useAppDispatch()

    const onChangeHandler = React.useCallback((
      items: SelectItems<string>
    ) => {
      dispatch(CategoryActions.setCurrentCategory(items[0]))
    }, [dispatch])

    return (
      <SelectAsyncField
        className={className}
        label={t('label')}
        placeholder={t('placeholder')}
        remotePath={remotePath}
        onChange={onChangeHandler}
        isLoading={isLoading}
        validation={validation}
      />
    )
  })
