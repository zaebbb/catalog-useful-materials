import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import {
  getIdsMultipleSelect,
  SelectAsyncField,
} from '@ui-kit/SelectField'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getRemotePathSelector } from '../../model/selectors/TagSelector'
import { TagActions } from '../../model/slice/TagSlice'

export interface SelectTagsProps {
  className?: string
  isLoading?: boolean
  validation?: string
}

export const SelectTags: React.FC<SelectTagsProps> =
  memo((props: SelectTagsProps) => {
    const {
      className,
      isLoading,
      validation,
    } = props
    const { t } = useTranslation('tag')
    const remotePath = useSelector(getRemotePathSelector)
    const dispatch = useAppDispatch()

    const onChangeHandler = React.useCallback((
      items: SelectItems<string>
    ) => {
      dispatch(TagActions.setTags(items))
      dispatch(TagActions.setTagsIds(getIdsMultipleSelect(items)))
    }, [dispatch])

    return (
      <SelectAsyncField
        className={className}
        label={t('label')}
        placeholder={t('placeholder')}
        remotePath={remotePath}
        onChange={onChangeHandler}
        isMultiple
        isLoading={isLoading}
        validation={validation}
      />
    )
  })
