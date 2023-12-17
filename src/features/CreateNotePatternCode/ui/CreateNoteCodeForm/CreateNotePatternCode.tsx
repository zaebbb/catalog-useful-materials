import { NoteBaseFieldsActions } from '@entities/Notes'
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
  getCreatedCodeSelector,
  getIsLoadingSelector,
  getValidationSelector,
} from '../../model/selectors/CreateNotePatternCodeSelectors'
import {
  CreateNotePatternCode as CreateNotePatternArticleService,
} from '../../model/services/CreateNotePatternCode'
import {
  CreateNotePatternCodeActions,
  CreateNotePatternCodeReducer,
} from '../../model/slice/CreateNotePatternCodeSlice'

interface CreateNotePatternCodeProps {
  className?: string
}

const reducers: ReducerList = {
  createNotePatternCode: CreateNotePatternCodeReducer,
}

export const CreateNotePatternCode: React.FC<CreateNotePatternCodeProps> =
  memo((props: CreateNotePatternCodeProps) => {
    const {
      className,
    } = props
    const { t } = useTranslation('create-note-pattern')
    const dispatch = useAppDispatch()

    const code = useSelector(getCodeSelector)
    const isLoading = useSelector(getIsLoadingSelector)
    const validation = useSelector(getValidationSelector)
    const createdCode = useSelector(getCreatedCodeSelector)
    const location = useLocation()

    const onChangeCode = React.useCallback((value: string) => {
      dispatch(CreateNotePatternCodeActions.setCode(value))
    }, [dispatch])

    const onClickHandler = React.useCallback(() => {
      dispatch(CreateNotePatternArticleService())
      dispatch(NoteBaseFieldsActions.setIsLoading(true))
      dispatch(NotesTypesActions.setIsLoading(true))
    }, [dispatch])

    if (createdCode) {
      return (
        <Navigate
          to={getRouteViewNote(createdCode)}
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
        />

        <HStack justify={'flex-end'}>
          <Button
            onClick={onClickHandler}
            size={'large'}
            disabled={isLoading}
            className={className}
          >
            {t('button-create')}
          </Button>
        </HStack>
      </DynamicReducerLoader>
    )
  })
