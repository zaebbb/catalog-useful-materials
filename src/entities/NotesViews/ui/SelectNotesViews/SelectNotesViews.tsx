import { type IsLoadingNoteParams } from '@entities/Notes'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { SelectAsyncField } from '@ui-kit/SelectField'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  getRemotePathSelector,
  getSelectedSelector,
} from '../../model/selectors/NotesViewsSelector'
import { NotesViewsActions } from '../../model/slice/NotesViewsSlice'
import { type NotesViewsCodeList } from '../../model/types/NotesViewsSchema'

export interface SelectNotesViewsProps extends IsLoadingNoteParams {
  className?: string
  isLoading?: boolean
  isRequired?: boolean
  isMax?: boolean
  validation?: string
  label?: string
  placeholder?: string
  onChange?: () => void
}

export const SelectNotesViews: React.FC<SelectNotesViewsProps> =
  memo((props: SelectNotesViewsProps) => {
    const {
      className,
      isLoading,
      validation,
      label,
      placeholder,
      isRequired = true,
      isMax,
      onChange,
    } = props
    const { t } = useTranslation('notes-views')
    const remotePath = useSelector(getRemotePathSelector)
    const selected = useSelector(getSelectedSelector)
    const dispatch = useAppDispatch()

    const onChangeHandler = React.useCallback((
      items: SelectItems<NotesViewsCodeList>
    ) => {
      dispatch(NotesViewsActions.setCurrentView(items[0]))
      onChange?.()
    }, [dispatch, onChange])

    return (
      <SelectAsyncField
        className={className}
        label={label ?? t('label')}
        placeholder={placeholder ?? t('placeholder')}
        remotePath={remotePath}
        onChange={onChangeHandler}
        isMax={isMax}
        isLoading={isLoading}
        validation={validation}
        selected={selected ? [selected] : []}
        isRequired={isRequired}
      />
    )
  })
