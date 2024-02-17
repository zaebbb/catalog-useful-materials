import { type NoteMode } from '@entities/Notes'
import { DynamicReducerLoader, type ReducerList } from '@lib/components/DynamicReducerLoader'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { getRouteViewNote } from '@lib/router'
import { Button } from '@ui-kit/Button'
import { HStack } from '@ui-kit/Stack'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import {
  getIsLoadingSelector, getIsMountedFieldsSelector,
  getSaveCodeSelector,
} from '../../model/selectors/NotePatternCustomSelectors'
import {
  FetchNoteTypeFieldsService,
} from '../../model/services/FetchNoteTypeFieldsService'
import { InitEditCustomData } from '../../model/services/InitEditCustomData'
import {
  SaveNotePatternCustom,
} from '../../model/services/SaveNotePatternCustom'
import {
  NotePatternCustomReducer,
} from '../../model/slice/NotePatternCustomSlice'
import {
  RenderCustomFields,
} from '../RenderCustomFields/RenderCustomFields'

interface NotePatternCustomFormProps {
  className?: string
  mode: NoteMode
}

const reducers: ReducerList = {
  notePatternCustom: NotePatternCustomReducer,
}

export const NotePatternCustomForm: React.FC<NotePatternCustomFormProps> =
  memo((props: NotePatternCustomFormProps) => {
    const {
      className,
      mode,
    } = props
    const { t } = useTranslation('create-note-pattern')
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getIsLoadingSelector)
    const saveCode = useSelector(getSaveCodeSelector)
    const isMountedFields = useSelector(getIsMountedFieldsSelector)
    const location = useLocation()

    const [
      files,
      setFiles,
    ] = React.useState<Record<string, Files>>({})

    const onSubmitHandler = React.useCallback(() => {
      dispatch(SaveNotePatternCustom({
        mode,
        files,
      }))
    }, [dispatch, files, mode])

    React.useEffect(() => {
      dispatch(FetchNoteTypeFieldsService())
    }, [dispatch])

    React.useEffect(() => {
      if (mode === 'edit' && isMountedFields) {
        dispatch(InitEditCustomData())
      }
    }, [dispatch, isMountedFields, mode])

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
        <RenderCustomFields
          setFiles={setFiles}
          files={files}
        />

        <HStack justify={'flex-end'}>
          <Button
            onClick={onSubmitHandler}
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
