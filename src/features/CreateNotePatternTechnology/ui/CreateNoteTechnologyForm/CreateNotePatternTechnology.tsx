import { NoteBaseFieldsActions } from '@entities/Notes'
import { NotesTypesActions } from '@entities/NotesTypes'
import { DynamicReducerLoader, type ReducerList } from '@lib/components/DynamicReducerLoader'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { getRouteViewNote } from '@lib/router'
import { Button } from '@ui-kit/Button'
import { InputField, InputFieldFile } from '@ui-kit/InputField'
import { HStack } from '@ui-kit/Stack'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import {
  getLinkDocsSelector,
  getLinkInstallSelector,
  getLinkTechnologySelector,
  getCreatedCodeSelector,
  getIsLoadingSelector,
  getValidationSelector,
} from '../../model/selectors/CreateNotePatternTechnologySelectors'
import {
  CreateNotePatternTechnology as CreateNotePatternTechnologyService,
} from '../../model/services/CreateNotePatternTechnology'
import {
  CreateNotePatternTechnologyActions,
  CreateNotePatternTechnologyReducer,
} from '../../model/slice/CreateNotePatternTechnologySlice'

interface CreateNotePatternTechnologyProps {
  className?: string
}

const reducers: ReducerList = {
  createNotePatternTechnology: CreateNotePatternTechnologyReducer,
}

export const CreateNotePatternTechnology: React.FC<CreateNotePatternTechnologyProps> =
  memo((props: CreateNotePatternTechnologyProps) => {
    const {
      className,
    } = props
    const { t } = useTranslation('create-note-pattern')
    const dispatch = useAppDispatch()

    const [filesState, setFiles] = React.useState<Files>([])

    const linkTechnology = useSelector(getLinkTechnologySelector)
    const linkDocs = useSelector(getLinkDocsSelector)
    const linkInstall = useSelector(getLinkInstallSelector)
    const isLoading = useSelector(getIsLoadingSelector)
    const validation = useSelector(getValidationSelector)
    const createdCode = useSelector(getCreatedCodeSelector)
    const location = useLocation()

    const onChangeLinkTechnology = React.useCallback((value: string) => {
      dispatch(CreateNotePatternTechnologyActions.setLinkTechnology(value))
    }, [dispatch])

    const onChangeLinkDocs = React.useCallback((value: string) => {
      dispatch(CreateNotePatternTechnologyActions.setLinkDocs(value))
    }, [dispatch])

    const onChangeLinkInstall = React.useCallback((value: string) => {
      dispatch(CreateNotePatternTechnologyActions.setLinkInstall(value))
    }, [dispatch])

    const onChangeIconTechnologyHandler = React.useCallback((files: Files) => {
      setFiles(files)
    }, [])

    const onClickHandler = React.useCallback(() => {
      dispatch(CreateNotePatternTechnologyService(filesState))
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
          label={t('input-pattern-technology-field-link-tech-label')}
          placeholder={t('input-pattern-technology-field-link-tech-placeholder')}
          value={linkTechnology}
          onChange={onChangeLinkTechnology}
          isLoading={isLoading}
          validation={validation?.linkTechnology}
          className={className}
          isMax
        />
        <InputField
          label={t('input-pattern-technology-field-link-docs-label')}
          placeholder={t('input-pattern-technology-field-link-docs-placeholder')}
          value={linkDocs}
          onChange={onChangeLinkDocs}
          isLoading={isLoading}
          validation={validation?.linkDocs}
          className={className}
          isMax
        />
        <InputField
          label={t('input-pattern-technology-field-link-install-label')}
          placeholder={t('input-pattern-technology-field-link-install-placeholder')}
          description={t('input-pattern-technology-field-link-install-description')}
          value={linkInstall}
          onChange={onChangeLinkInstall}
          isLoading={isLoading}
          validation={validation?.linkInstall}
          className={className}
          isMax
        />

        <InputFieldFile
          label={t('input-pattern-technology-field-icon-label')}
          isMax
          value={filesState}
          validation={validation?.icon}
          onChange={onChangeIconTechnologyHandler}
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
