import { type IsLoadingNoteParams } from '@entities/Notes'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { SelectAsyncField } from '@ui-kit/SelectField'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getRemotePathSelector } from '../../model/selectors/NotesViewsSelector'
import { NotesViewsActions } from '../../model/slice/NotesViewsSlice'
import { type NotesViewsCodeList } from '../../model/types/NotesViewsSchema'

export interface SelectNotesViewsProps extends IsLoadingNoteParams {
  className?: string
  isLoading?: boolean
  validation?: string
}

export const SelectNotesViews: React.FC<SelectNotesViewsProps> =
  memo((props: SelectNotesViewsProps) => {
    const {
      className,
      isLoading,
      validation,
    } = props
    const { t } = useTranslation('notes-views')
    const remotePath = useSelector(getRemotePathSelector)
    const dispatch = useAppDispatch()

    const onChangeHandler = React.useCallback((
      items: SelectItems<NotesViewsCodeList>
    ) => {
      dispatch(NotesViewsActions.setCurrentView(items[0]))
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
