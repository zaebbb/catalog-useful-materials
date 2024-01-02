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
  getLinkVideoSelector,
  getValidationSelector,
} from '../../model/selectors/CreateNotePatternVideoSelectors'
import {
  CreateNotePatternVideo as CreateNotePatternVideoService,
} from '../../model/services/CreateNotePatternVideo'
import {
  CreateNotePatternVideoActions,
  CreateNotePatternVideoReducer,
} from '../../model/slice/CreateNotePatternVideoSlice'

interface CreateNotePatternVideoProps {
  className?: string
}

const reducers: ReducerList = {
  createNotePatternVideo: CreateNotePatternVideoReducer,
}

export const CreateNotePatternVideo: React.FC<CreateNotePatternVideoProps> =
  memo((props: CreateNotePatternVideoProps) => {
    const {
      className,
    } = props
    const { t } = useTranslation('create-note-pattern')
    const dispatch = useAppDispatch()

    const linkVideo = useSelector(getLinkVideoSelector)
    const isLoading = useSelector(getIsLoadingSelector)
    const validation = useSelector(getValidationSelector)
    const createdCode = useSelector(getCreatedCodeSelector)
    const location = useLocation()

    const onChangeLinkHandler = React.useCallback((link: string) => {
      dispatch(CreateNotePatternVideoActions.setLinkVideo(link))
    }, [dispatch])

    const onClickHandler = React.useCallback(() => {
      dispatch(CreateNotePatternVideoService())
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
          label={t('input-pattern-video-field-link-label')}
          placeholder={t('input-pattern-video-field-link-placeholder')}
          validation={validation?.linkVideo}
          value={linkVideo}
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
