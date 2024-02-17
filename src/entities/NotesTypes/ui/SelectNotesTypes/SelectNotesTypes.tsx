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
  isMax?: boolean
  isRequired?: boolean
  label?: string
  placeholder?: string
  onChange?: () => void
}

export const SelectNotesTypes: React.FC<SelectNotesTypesProps> =
  memo((props: SelectNotesTypesProps) => {
    const {
      className,
      label,
      placeholder,
      isRequired = true,
      isMax,
      onChange,
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
      } else {
        dispatch(NotesTypesActions.setCurrentType(undefined))
      }

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
        validation={validation}
        isSearch
        isRequired={isRequired}
        searchPlaceholder={t('search-placeholder')}
        isMax={isMax}
      />
    )
  })
