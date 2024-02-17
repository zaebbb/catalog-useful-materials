import { NoteBaseFieldsActions, type NoteMode } from '@entities/Notes'
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
  getIsLoadingSelector,
  getLinkLayoutSelector, getRemoteImageEditSelector, getSaveCodeSelector,
  getValidationSelector,
} from '../../model/selectors/NotePatternLayoutSelectors'
import { InitEditLayoutData } from '../../model/services/InitEditLayoutData'
import {
  SaveNotePatternLayout as SaveNotePatternLayoutService,
} from '../../model/services/SaveNotePatternLayout'
import {
  NotePatternLayoutActions,
  NotePatternLayoutReducer,
} from '../../model/slice/NotePatternLayoutSlice'

interface CreateNotePatternLayoutProps {
  className?: string
  mode: NoteMode
}

const reducers: ReducerList = {
  notePatternLayout: NotePatternLayoutReducer,
}

export const NotePatternLayoutForm: React.FC<CreateNotePatternLayoutProps> =
  memo((props: CreateNotePatternLayoutProps) => {
    const {
      className,
      mode,
    } = props
    const { t } = useTranslation('create-note-pattern')
    const dispatch = useAppDispatch()

    const [filesState, setFiles] = React.useState<Files>([])

    const linkLayout = useSelector(getLinkLayoutSelector)
    const isLoading = useSelector(getIsLoadingSelector)
    const validation = useSelector(getValidationSelector)
    const saveCode = useSelector(getSaveCodeSelector)
    const remoteImage = useSelector(getRemoteImageEditSelector)
    const location = useLocation()

    const onChangeLinkHandler = React.useCallback((link: string) => {
      dispatch(NotePatternLayoutActions.setLinkLayout(link))
    }, [dispatch])

    const onChangeImageLayoutHandler = React.useCallback((files: Files) => {
      setFiles(files)
    }, [])

    const onClickHandler = React.useCallback(() => {
      dispatch(SaveNotePatternLayoutService({
        files: filesState,
        mode,
      }))

      dispatch(NoteBaseFieldsActions.setIsLoading(true))
      dispatch(NotesTypesActions.setIsLoading(true))
    }, [dispatch, filesState, mode])

    React.useEffect(() => {
      if (mode === 'edit') {
        dispatch(InitEditLayoutData())
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
          label={t('input-pattern-layout-field-link-label')}
          placeholder={t('input-pattern-layout-field-link-placeholder')}
          validation={validation?.linkLayout}
          value={linkLayout}
          onChange={onChangeLinkHandler}
          className={className}
          isLoading={isLoading}
          isRequired
        />

        <InputFieldFile
          label={t('input-pattern-layout-field-image-label')}
          isMax
          value={filesState}
          validation={validation?.imageLayout}
          onChange={onChangeImageLayoutHandler}
          className={className}
          isLoading={isLoading}
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
