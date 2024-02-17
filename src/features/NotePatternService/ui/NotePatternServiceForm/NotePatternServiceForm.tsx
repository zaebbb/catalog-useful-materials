import { NoteBaseFieldsActions, type NoteMode } from '@entities/Notes'
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
  getSaveCodeSelector,
  getIsLoadingSelector,
  getLinkServiceSelector,
  getValidationSelector,
} from '../../model/selectors/NotePatternServiceSelectors'
import { InitEditServiceData } from '../../model/services/InitEditServiceData'
import {
  SaveNotePatternService as SaveNotePatternServiceService,
} from '../../model/services/SaveNotePatternService'
import {
  NotePatternServiceActions,
  NotePatternServiceReducer,
} from '../../model/slice/NotePatternServiceSlice'

interface CreateNotePatternServiceProps {
  className?: string
  mode: NoteMode
}

const reducers: ReducerList = {
  notePatternService: NotePatternServiceReducer,
}

export const NotePatternServiceForm: React.FC<CreateNotePatternServiceProps> =
  memo((props: CreateNotePatternServiceProps) => {
    const {
      className,
      mode,
    } = props
    const { t } = useTranslation('create-note-pattern')
    const dispatch = useAppDispatch()

    const linkService = useSelector(getLinkServiceSelector)
    const isLoading = useSelector(getIsLoadingSelector)
    const validation = useSelector(getValidationSelector)
    const saveCode = useSelector(getSaveCodeSelector)
    const location = useLocation()

    const onChangeLinkHandler = React.useCallback((link: string) => {
      dispatch(NotePatternServiceActions.setLinkService(link))
    }, [dispatch])

    const onClickHandler = React.useCallback(() => {
      dispatch(SaveNotePatternServiceService({
        mode,
      }))

      dispatch(NoteBaseFieldsActions.setIsLoading(true))
      dispatch(NotesTypesActions.setIsLoading(true))
    }, [dispatch, mode])

    React.useEffect(() => {
      if (mode === 'edit') {
        dispatch(InitEditServiceData())
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
        <InputField
          label={t('input-pattern-service-field-link-label')}
          placeholder={t('input-pattern-service-field-link-placeholder')}
          validation={validation?.linkService}
          value={linkService}
          onChange={onChangeLinkHandler}
          className={className}
          isLoading={isLoading}
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
