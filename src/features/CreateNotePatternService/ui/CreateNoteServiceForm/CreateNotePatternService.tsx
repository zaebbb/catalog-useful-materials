import { NoteBaseFieldsActions } from '@entities/Notes'
import { NotesTypesActions } from '@entities/NotesTypes'
import { DynamicReducerLoader, type ReducerList } from '@lib/components/DynamicReducerLoader'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { getRouteViewNote } from '@lib/router'
import { Button } from '@ui-kit/Button'
import { InputField } from '@ui-kit/InputField'
import { HStack } from '@ui-kit/Stack'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import {
  getCreatedCodeSelector,
  getIsLoadingSelector,
  getLinkServiceSelector,
  getValidationSelector,
} from '../../model/selectors/CreateNotePatternServiceSelectors'
import {
  CreateNotePatternService as CreateNotePatternServiceService,
} from '../../model/services/CreateNotePatternService'
import {
  CreateNotePatternServiceActions,
  CreateNotePatternServiceReducer,
} from '../../model/slice/CreateNotePatternServiceSlice'

interface CreateNotePatternServiceProps {
  className?: string
}

const reducers: ReducerList = {
  createNotePatternService: CreateNotePatternServiceReducer,
}

export const CreateNotePatternService: React.FC<CreateNotePatternServiceProps> =
  memo((props: CreateNotePatternServiceProps) => {
    const {
      className,
    } = props
    const { t } = useTranslation('create-note-pattern')
    const dispatch = useAppDispatch()

    const linkService = useSelector(getLinkServiceSelector)
    const isLoading = useSelector(getIsLoadingSelector)
    const validation = useSelector(getValidationSelector)
    const createdCode = useSelector(getCreatedCodeSelector)
    const location = useLocation()

    const onChangeLinkHandler = React.useCallback((link: string) => {
      dispatch(CreateNotePatternServiceActions.setLinkService(link))
    }, [dispatch])

    const onClickHandler = React.useCallback(() => {
      dispatch(CreateNotePatternServiceService())
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

        <InputField
          label={t('input-pattern-service-field-link-label')}
          placeholder={t('input-pattern-service-field-link-placeholder')}
          validation={validation?.linkService}
          value={linkService}
          onChange={onChangeLinkHandler}
          className={className}
          isLoading={isLoading}
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
