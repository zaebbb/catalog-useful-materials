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
  getCreatedCodeSelector,
  getIsLoadingSelector,
  getLinkLayoutSelector,
  getValidationSelector,
} from '../../model/selectors/CreateNotePatternLayoutSelectors'
import {
  CreateNotePatternLayout as CreateNotePatternLayoutService,
} from '../../model/services/CreateNotePatternLayout'
import {
  CreateNotePatternLayoutActions,
  CreateNotePatternLayoutReducer,
} from '../../model/slice/CreateNotePatternLayoutSlice'

interface CreateNotePatternLayoutProps {
  className?: string
}

const reducers: ReducerList = {
  createNotePatternLayout: CreateNotePatternLayoutReducer,
}

export const CreateNotePatternLayout: React.FC<CreateNotePatternLayoutProps> =
  memo((props: CreateNotePatternLayoutProps) => {
    const {
      className,
    } = props
    const { t } = useTranslation('create-note-pattern')
    const dispatch = useAppDispatch()

    const [filesState, setFiles] = React.useState<Files>([])

    const linkLayout = useSelector(getLinkLayoutSelector)
    const isLoading = useSelector(getIsLoadingSelector)
    const validation = useSelector(getValidationSelector)
    const createdCode = useSelector(getCreatedCodeSelector)
    const location = useLocation()

    const onChangeLinkHandler = React.useCallback((link: string) => {
      dispatch(CreateNotePatternLayoutActions.setLinkLayout(link))
    }, [dispatch])

    const onChangeImageLayoutHandler = React.useCallback((files: Files) => {
      setFiles(files)
    }, [])

    const onClickHandler = React.useCallback(() => {
      dispatch(CreateNotePatternLayoutService(filesState))
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
          label={t('input-pattern-layout-field-link-label')}
          placeholder={t('input-pattern-layout-field-link-placeholder')}
          validation={validation?.linkLayout}
          value={linkLayout}
          onChange={onChangeLinkHandler}
          className={className}
          isLoading={isLoading}
        />

        <InputFieldFile
          label={t('input-pattern-layout-field-image-label')}
          isMax
          value={filesState}
          validation={validation?.imageLayout}
          onChange={onChangeImageLayoutHandler}
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
