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
  getIsLoadingSelector,
  getLinkVideoSelector, getSaveCodeSelector,
  getValidationSelector,
} from '../../model/selectors/NotePatternVideoSelectors'
import { InitEditVideoData } from '../../model/services/InitEditVideoData'
import {
  SaveNotePatternVideo as SaveNotePatternVideoService,
} from '../../model/services/SaveNotePatternVideo'
import {
  NotePatternVideoActions,
  NotePatternVideoReducer,
} from '../../model/slice/NotePatternVideoSlice'

interface NotePatternVideoProps {
  className?: string
  mode: NoteMode
}

const reducers: ReducerList = {
  notePatternVideo: NotePatternVideoReducer,
}

export const NotePatternVideoForm: React.FC<NotePatternVideoProps> =
  memo((props: NotePatternVideoProps) => {
    const {
      className,
      mode,
    } = props
    const { t } = useTranslation('create-note-pattern')
    const dispatch = useAppDispatch()

    const linkVideo = useSelector(getLinkVideoSelector)
    const isLoading = useSelector(getIsLoadingSelector)
    const validation = useSelector(getValidationSelector)
    const saveCode = useSelector(getSaveCodeSelector)
    const location = useLocation()

    const onChangeLinkHandler = React.useCallback((link: string) => {
      dispatch(NotePatternVideoActions.setLinkVideo(link))
    }, [dispatch])

    const onClickHandler = React.useCallback(() => {
      dispatch(SaveNotePatternVideoService({
        mode,
      }))

      dispatch(NoteBaseFieldsActions.setIsLoading(true))
      dispatch(NotesTypesActions.setIsLoading(true))
    }, [dispatch, mode])

    React.useEffect(() => {
      if (mode === 'edit') {
        dispatch(InitEditVideoData())
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
