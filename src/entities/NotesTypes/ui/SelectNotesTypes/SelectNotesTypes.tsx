import { NoteBaseFieldsActions } from '@entities/Notes'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { SelectAsyncField } from '@ui-kit/SelectField'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  getIsLoadingSelector,
  getRemotePathSelector,
  getValidationSelector,
} from '../../model/selectors/NotesTypesSelector'
import { NotesTypesActions } from '../../model/slice/NotesTypesSlice'
import { type NotesTypesCodeList } from '../../model/types/NotesTypesSchema'

export interface SelectNotesTypesProps {
  className?: string
}

export const SelectNotesTypes: React.FC<SelectNotesTypesProps> =
  memo((props: SelectNotesTypesProps) => {
    const {
      className,
    } = props
    const { t } = useTranslation('notes-types')
    const dispatch = useAppDispatch()
    const remotePath = useSelector(getRemotePathSelector)
    const isLoading = useSelector(getIsLoadingSelector)
    const validation = useSelector(getValidationSelector)

    const onChangeHandler = React.useCallback((
      items: SelectItems<NotesTypesCodeList>
    ) => {
      if (items[0]) {
        dispatch(NotesTypesActions.setCurrentType(items[0]))
        dispatch(NoteBaseFieldsActions.setIsLoading(false))
        dispatch(NoteBaseFieldsActions.setValidation({}))
      }
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
        isSearch
        searchPlaceholder={t('search-placeholder')}
      />
    )
  })
