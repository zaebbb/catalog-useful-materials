import { NoteBaseFieldsActions, type NoteMode } from '@entities/Notes'
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
  getSaveCodeSelector,
  getIsImageParseSelector, getIsLoadingSelector,
  getLinkNoteSelector, getLinkVideoSelector, getRemoteImageEditSelector, getValidationSelector,
} from '../../model/selectors/NotePatternArticleSelectors'
import { InitEditArticleData } from '../../model/services/InitEditArticleData'
import {
  SaveNotePatternArticle,
} from '../../model/services/SaveNotePatternArticle'
import {
  NotePatternArticleActions,
  NotePatternArticleReducer,
} from '../../model/slice/NotePatternArticleSlice'

interface NotePatternArticleFormProps {
  className?: string
  mode: NoteMode
}

const reducers: ReducerList = {
  notePatternArticle: NotePatternArticleReducer,
}

export const NotePatternArticleForm: React.FC<NotePatternArticleFormProps> =
  memo((props: NotePatternArticleFormProps) => {
    const {
      className,
      mode,
    } = props
    const { t } = useTranslation('create-note-pattern')
    const dispatch = useAppDispatch()

    const [filesState, setFiles] = React.useState<Files>([])

    const linkNoteValue = useSelector(getLinkNoteSelector)
    const linkVideoValue = useSelector(getLinkVideoSelector)
    const isImageParseValue = useSelector(getIsImageParseSelector)
    const isLoading = useSelector(getIsLoadingSelector)
    const validation = useSelector(getValidationSelector)
    const saveCode = useSelector(getSaveCodeSelector)
    const remoteImage = useSelector(getRemoteImageEditSelector)
    const location = useLocation()

    const onChangeLinkNote = React.useCallback((value: string) => {
      dispatch(NotePatternArticleActions.setLinkNote(value))
    }, [dispatch])

    const onChangeLinkVideo = React.useCallback((value: string) => {
      dispatch(NotePatternArticleActions.setLinkVideo(value))
    }, [dispatch])

    const onChangeIsImageParse = React.useCallback(async (value: boolean) => {
      dispatch(NotePatternArticleActions.setIsImageParse(value))

      if (linkNoteValue) {
        console.log(parser(linkNoteValue, 'head', 'og:image'))
      }
    }, [dispatch, linkNoteValue])

    const onChangeImage = React.useCallback((files: Files) => {
      setFiles(files)
    }, [])

    const onClickHandler = React.useCallback(() => {
      dispatch(SaveNotePatternArticle({
        files: filesState,
        mode,
      }))

      dispatch(NoteBaseFieldsActions.setIsLoading(true))
      dispatch(NotesTypesActions.setIsLoading(true))
    }, [dispatch, filesState, mode])

    React.useEffect(() => {
      if (mode === 'edit') {
        dispatch(InitEditArticleData())
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
          label={t('input-pattern-article-link-note-label')}
          placeholder={t('input-pattern-article-link-note-placeholder')}
          value={linkNoteValue}
          onChange={onChangeLinkNote}
          isMax
          isLoading={isLoading}
          validation={validation?.linkNote}
          className={className}
          isRequired
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
          remoteFiles={remoteImage ? [remoteImage] : []}
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
