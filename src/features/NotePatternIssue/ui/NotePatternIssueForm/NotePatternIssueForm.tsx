import { NoteBaseFieldsActions, type NoteMode } from '@entities/Notes'
import { NotesTypesActions } from '@entities/NotesTypes'

import { DynamicReducerLoader, type ReducerList } from '@lib/components/DynamicReducerLoader'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { getRouteViewNote } from '@lib/router'
import { Button } from '@ui-kit/Button'
import { InputField, InputFieldFile } from '@ui-kit/InputField'
import { SelectField } from '@ui-kit/SelectField'
import { HStack } from '@ui-kit/Stack'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { useSelectViewOptions } from '../../lib/hooks/useSelectViewOptions'
import {
  getSaveCodeSelector, getIsImageViewSelector, getIsLinkViewSelector,
  getIsLoadingSelector, getLinkIssueSelector,
  getValidationSelector, getRemoteFileIssueEditSelector,
} from '../../model/selectors/NotePatternIssueSelectors'
import { InitEditIssueData } from '../../model/services/InitEditIssueData'
import {
  SaveNotePatternIssue as CreateNotePatternIssueService,
} from '../../model/services/SaveNotePatternIssue'
import {
  NotePatternIssueActions,
  NotePatternIssueReducer,
} from '../../model/slice/NotePatternIssueSlice'
import {
  IssueViewList,
} from '../../model/types/NotePatternIssueSchema'

interface CreateNotePatternIssueProps {
  className?: string
  mode: NoteMode
}

const reducers: ReducerList = {
  notePatternIssue: NotePatternIssueReducer,
}

export const NotePatternIssueForm: React.FC<CreateNotePatternIssueProps> =
  memo((props: CreateNotePatternIssueProps) => {
    const {
      className,
      mode,
    } = props
    const { t } = useTranslation('create-note-pattern')
    const dispatch = useAppDispatch()
    const viewOptions = useSelectViewOptions()

    const [filesState, setFiles] = React.useState<Files>([])

    const isViewLink = useSelector(getIsLinkViewSelector)
    const isViewImage = useSelector(getIsImageViewSelector)
    const linkIssue = useSelector(getLinkIssueSelector)
    const isLoading = useSelector(getIsLoadingSelector)
    const validation = useSelector(getValidationSelector)
    const saveCode = useSelector(getSaveCodeSelector)
    const remoteImage = useSelector(getRemoteFileIssueEditSelector)
    const location = useLocation()

    const onChangeViewHandler = React.useCallback((items: SelectItems<IssueViewList>) => {
      if (items[0]) {
        switch (items[0].code) {
          case IssueViewList.LINK:
            dispatch(NotePatternIssueActions.setViewLink())
            break
          case IssueViewList.IMAGE:
            dispatch(NotePatternIssueActions.setViewImage())
            break
        }
      }
    }, [dispatch])

    const onChangeLinkHandler = React.useCallback((link: string) => {
      dispatch(NotePatternIssueActions.setLinkIssue(link))
    }, [dispatch])

    const onClickHandler = React.useCallback(() => {
      dispatch(CreateNotePatternIssueService({
        files: filesState,
        mode,
      }))

      dispatch(NoteBaseFieldsActions.setIsLoading(true))
      dispatch(NotesTypesActions.setIsLoading(true))
    }, [dispatch, filesState, mode])

    const onChangeImageIssueHandler = React.useCallback((files: Files) => {
      setFiles(files)
    }, [])

    React.useEffect(() => {
      if (mode === 'edit') {
        dispatch(InitEditIssueData())
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
        <SelectField
          label={t('input-pattern-issue-field-view-label')}
          isLoading={isLoading}
          items={viewOptions}
          selected={[isViewLink ? viewOptions[1] : viewOptions[0]]}
          onChange={onChangeViewHandler}
          validation={validation?.isLinkView ?? validation?.isImageView}
          className={className}
          isRequired
        />

        {(isViewLink && (
          <InputField
            label={t('input-pattern-issue-field-link-label')}
            placeholder={t('input-pattern-issue-field-link-placeholder')}
            validation={validation?.linkIssue}
            value={linkIssue}
            onChange={onChangeLinkHandler}
            className={className}
            isLoading={isLoading}
            isRequired
          />
        ))}

        {(isViewImage && (
          <InputFieldFile
            label={t('input-pattern-issue-field-image-label')}
            isMax
            value={filesState}
            validation={validation?.imageIssue}
            onChange={onChangeImageIssueHandler}
            className={className}
            isLoading={isLoading}
            remoteFiles={remoteImage ? [remoteImage] : []}
            isRequired
          />
        ))}

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
