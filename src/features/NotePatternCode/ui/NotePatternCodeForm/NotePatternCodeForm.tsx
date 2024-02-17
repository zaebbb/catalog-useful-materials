import { NoteBaseFieldsActions, type NoteMode } from '@entities/Notes'
import { NotesTypesActions } from '@entities/NotesTypes'
import { DynamicReducerLoader, type ReducerList } from '@lib/components/DynamicReducerLoader'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { getRouteViewNote } from '@lib/router'
import { Button } from '@ui-kit/Button'
import { HStack } from '@ui-kit/Stack'
import { TextareaField } from '@ui-kit/TextareaField'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import {
  getCodeSelector,
  getIsLoadingSelector, getSaveCodeSelector,
  getValidationSelector,
} from '../../model/selectors/NotePatternCodeSelectors'
import { InitEditCodeData } from '../../model/services/InitEditCodeData'
import {
  SaveNotePatternCode as SaveNotePatternCodeService,
} from '../../model/services/SaveNotePatternCode'
import {
  NotePatternCodeActions,
  NotePatternCodeReducer,
} from '../../model/slice/NotePatternCodeSlice'

interface NotePatternCodeProps {
  className?: string
  mode: NoteMode
}

const reducers: ReducerList = {
  notePatternCode: NotePatternCodeReducer,
}

export const NotePatternCodeForm: React.FC<NotePatternCodeProps> =
  memo((props: NotePatternCodeProps) => {
    const {
      className,
      mode,
    } = props
    const { t } = useTranslation('create-note-pattern')
    const dispatch = useAppDispatch()

    const code = useSelector(getCodeSelector)
    const isLoading = useSelector(getIsLoadingSelector)
    const validation = useSelector(getValidationSelector)
    const saveCode = useSelector(getSaveCodeSelector)
    const location = useLocation()

    const onChangeCode = React.useCallback((value: string) => {
      dispatch(NotePatternCodeActions.setCode(value))
    }, [dispatch])

    const onClickHandler = React.useCallback(() => {
      dispatch(SaveNotePatternCodeService({
        mode,
      }))

      dispatch(NoteBaseFieldsActions.setIsLoading(true))
      dispatch(NotesTypesActions.setIsLoading(true))
    }, [dispatch, mode])

    React.useEffect(() => {
      if (mode === 'edit') {
        dispatch(InitEditCodeData())
      }
    }, [dispatch, mode])

    if (saveCode) {
      return (
        <Navigate
          to={getRouteViewNote(saveCode)}
          state={{ from: location }}
          replace
        />
      )
    }

    return (
      <DynamicReducerLoader reducers={reducers}>
        <TextareaField
          label={t('input-pattern-code-field-code-label')}
          description={t('input-pattern-code-field-code-description')}
          value={code}
          onChange={onChangeCode}
          isLoading={isLoading}
          validation={validation?.code}
          mode={'code'}
          className={className}
          isRequired
        />

        <HStack justify={'flex-end'}>
          <Button
            onClick={onClickHandler}
            size={'large'}
            isDisabled={isLoading}
            className={className}
          >
            {t('button-create')}
          </Button>
        </HStack>
      </DynamicReducerLoader>
    )
  })
