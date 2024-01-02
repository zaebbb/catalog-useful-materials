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
  getAuthorCourseSelector,
  getCreatedCodeSelector,
  getIsLoadingSelector, getLinkCourseSelector,
  getValidationSelector,
} from '../../model/selectors/CreateNotePatternCourseSelectors'
import {
  CreateNotePatternCourse as CreateNotePatternCourseService,
} from '../../model/services/CreateNotePatternCourse'
import {
  CreateNotePatternCourseActions,
  CreateNotePatternCourseReducer,
} from '../../model/slice/CreateNotePatternCourseSlice'

interface CreateNotePatternCourseProps {
  className?: string
}

const reducers: ReducerList = {
  createNotePatternCourse: CreateNotePatternCourseReducer,
}

export const CreateNotePatternCourse: React.FC<CreateNotePatternCourseProps> =
  memo((props: CreateNotePatternCourseProps) => {
    const {
      className,
    } = props
    const { t } = useTranslation('create-note-pattern')
    const dispatch = useAppDispatch()

    const linkCourse = useSelector(getLinkCourseSelector)
    const authorCourse = useSelector(getAuthorCourseSelector)
    const isLoading = useSelector(getIsLoadingSelector)
    const validation = useSelector(getValidationSelector)
    const createdCode = useSelector(getCreatedCodeSelector)
    const location = useLocation()

    const onChangeLinkHandler = React.useCallback((link: string) => {
      dispatch(CreateNotePatternCourseActions.setLinkCourse(link))
    }, [dispatch])

    const onChangeAuthorHandler = React.useCallback((value: string) => {
      dispatch(CreateNotePatternCourseActions.setAuthorCourse(value))
    }, [dispatch])

    const onClickHandler = React.useCallback(() => {
      dispatch(CreateNotePatternCourseService())
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
          label={t('input-pattern-course-field-link-label')}
          placeholder={t('input-pattern-course-field-link-placeholder')}
          validation={validation?.linkCourse}
          value={linkCourse}
          onChange={onChangeLinkHandler}
          className={className}
          isLoading={isLoading}
        />

        <InputField
          label={t('input-pattern-course-field-author-label')}
          placeholder={t('input-pattern-course-field-author-placeholder')}
          validation={validation?.authorCourse}
          value={authorCourse}
          onChange={onChangeAuthorHandler}
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
