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
  getAuthorCourseSelector,
  getIsLoadingSelector,
  getLinkCourseSelector,
  getSaveCodeSelector,
  getValidationSelector,
} from '../../model/selectors/NotePatternCourseSelectors'
import { InitEditCourseData } from '../../model/services/InitEditCourseData'
import {
  SaveNotePatternCourse as SaveNotePatternCourseService,
} from '../../model/services/SaveNotePatternCourse'
import {
  NotePatternCourseActions,
  NotePatternCourseReducer,
} from '../../model/slice/NotePatternCourseSlice'

interface CreateNotePatternCourseProps {
  className?: string
  mode: NoteMode
}

const reducers: ReducerList = {
  notePatternCourse: NotePatternCourseReducer,
}

export const NotePatternCourseForm: React.FC<CreateNotePatternCourseProps> =
  memo((props: CreateNotePatternCourseProps) => {
    const {
      className,
      mode,
    } = props
    const { t } = useTranslation('create-note-pattern')
    const dispatch = useAppDispatch()

    const linkCourse = useSelector(getLinkCourseSelector)
    const authorCourse = useSelector(getAuthorCourseSelector)
    const isLoading = useSelector(getIsLoadingSelector)
    const validation = useSelector(getValidationSelector)
    const saveCode = useSelector(getSaveCodeSelector)
    const location = useLocation()

    const onChangeLinkHandler = React.useCallback((link: string) => {
      dispatch(NotePatternCourseActions.setLinkCourse(link))
    }, [dispatch])

    const onChangeAuthorHandler = React.useCallback((value: string) => {
      dispatch(NotePatternCourseActions.setAuthorCourse(value))
    }, [dispatch])

    const onClickHandler = React.useCallback(() => {
      dispatch(SaveNotePatternCourseService({
        mode,
      }))

      dispatch(NoteBaseFieldsActions.setIsLoading(true))
      dispatch(NotesTypesActions.setIsLoading(true))
    }, [dispatch, mode])

    React.useEffect(() => {
      if (mode === 'edit') {
        dispatch(InitEditCourseData())
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
          label={t('input-pattern-course-field-link-label')}
          placeholder={t('input-pattern-course-field-link-placeholder')}
          validation={validation?.linkCourse}
          value={linkCourse}
          onChange={onChangeLinkHandler}
          className={className}
          isLoading={isLoading}
          isRequired
        />

        <InputField
          label={t('input-pattern-course-field-author-label')}
          placeholder={t('input-pattern-course-field-author-placeholder')}
          validation={validation?.authorCourse}
          value={authorCourse}
          onChange={onChangeAuthorHandler}
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
