import { NoteBaseFieldsActions } from '@entities/Notes'
import { NotesTypesActions } from '@entities/NotesTypes'
import { DynamicReducerLoader, type ReducerList } from '@lib/components/DynamicReducerLoader'
import { parser } from '@lib/helpers/siteParser'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { getRouteViewNote } from '@lib/router'
import { Button } from '@ui-kit/Button'
import { CheckboxField } from '@ui-kit/CheckboxField'
import { InputField, InputFieldFile } from '@ui-kit/InputField'
import { HStack } from '@ui-kit/Stack'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import {
  getCreatedCodeSelector,
  getIsImageParseSelector, getIsLoadingSelector,
  getLinkNoteSelector, getLinkVideoSelector, getValidationSelector,
} from '../../model/selectors/CreateNotePatternArticleSelectors'
import {
  CreateNotePatternArticleActions,
  CreateNotePatternArticleReducer,
} from '../../model/slice/CreateNotePatternArticleSlice'
import {
  CreateNotePatternArticle as CreateNotePatternArticleService,
} from './../../model/services/CreateNotePatternArticle'

interface CreateNotePatternArticleProps {
  className?: string
}

const reducers: ReducerList = {
  createNotePatternArticle: CreateNotePatternArticleReducer,
}

export const CreateNotePatternArticle: React.FC<CreateNotePatternArticleProps> =
  memo((props: CreateNotePatternArticleProps) => {
    const {
      className,
    } = props
    const { t } = useTranslation('create-note-pattern')
    const dispatch = useAppDispatch()

    const [filesState, setFiles] = React.useState<Files>([])

    const linkNoteValue = useSelector(getLinkNoteSelector)
    const linkVideoValue = useSelector(getLinkVideoSelector)
    const isImageParseValue = useSelector(getIsImageParseSelector)
    const isLoading = useSelector(getIsLoadingSelector)
    const validation = useSelector(getValidationSelector)
    const createdCode = useSelector(getCreatedCodeSelector)
    const location = useLocation()

    const onChangeLinkNote = React.useCallback((value: string) => {
      dispatch(CreateNotePatternArticleActions.setLinkNote(value))
    }, [dispatch])

    const onChangeLinkVideo = React.useCallback((value: string) => {
      dispatch(CreateNotePatternArticleActions.setLinkVideo(value))
    }, [dispatch])

    const onChangeIsImageParse = React.useCallback(async (value: boolean) => {
      dispatch(CreateNotePatternArticleActions.setIsImageParse(value))

      if (linkNoteValue) {
        console.log(parser(linkNoteValue, 'head', 'og:image'))
      }
    }, [dispatch, linkNoteValue])

    const onChangeImage = React.useCallback((files: Files) => {
      setFiles(files)
    }, [])

    const onClickHandler = React.useCallback(() => {
      dispatch(CreateNotePatternArticleService(filesState))
      dispatch(NoteBaseFieldsActions.setIsLoading(true))
      dispatch(NotesTypesActions.setIsLoading(true))
    }, [dispatch, filesState])

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
          label={t('input-pattern-article-link-note-label')}
          placeholder={t('input-pattern-article-link-note-placeholder')}
          value={linkNoteValue}
          onChange={onChangeLinkNote}
          isMax
          isLoading={isLoading}
          validation={validation?.linkNote}
          className={className}
        />

        {linkNoteValue && (
          <CheckboxField
            label={t('input-pattern-article-parse-image')}
            isReadonly={isImageParseValue}
            checked={isImageParseValue}
            onChange={onChangeIsImageParse}
            isLoading={isLoading}
            className={className}
          />
        )}

        <InputField
          label={t('input-pattern-article-link-video-label')}
          placeholder={t('input-pattern-article-link-video-placeholder')}
          value={linkVideoValue}
          onChange={onChangeLinkVideo}
          isMax
          isLoading={isLoading}
          validation={validation?.linkVideo}
          className={className}
        />

        <InputFieldFile
          label={t('input-pattern-article-image-label')}
          isMax
          isReadonly={isImageParseValue}
          onChange={onChangeImage}
          value={filesState}
          isLoading={isLoading}
          validation={validation?.image}
          className={className}
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
