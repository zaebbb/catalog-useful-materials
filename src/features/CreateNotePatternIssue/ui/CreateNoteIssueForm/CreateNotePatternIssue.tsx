import { NoteBaseFieldsActions } from '@entities/Notes'
import { NotesTypesActions } from '@entities/NotesTypes'
import {
  IssueViewList,
} from '@features/CreateNotePatternIssue/model/types/CreateNotePatternIssueSchema'
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
  getCreatedCodeSelector, getIsImageViewSelector, getIsLinkViewSelector,
  getIsLoadingSelector, getLinkIssueSelector,
  getValidationSelector,
} from '../../model/selectors/CreateNotePatternIssueSelectors'
import {
  CreateNotePatternIssue as CreateNotePatternArticleService,
} from '../../model/services/CreateNotePatternIssue'
import {
  CreateNotePatternIssueActions,
  CreateNotePatternIssueReducer,
} from '../../model/slice/CreateNotePatternIssueSlice'

interface CreateNotePatternIssueProps {
  className?: string
}

const reducers: ReducerList = {
  createNotePatternIssue: CreateNotePatternIssueReducer,
}

export const CreateNotePatternIssue: React.FC<CreateNotePatternIssueProps> =
  memo((props: CreateNotePatternIssueProps) => {
    const {
      className,
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
    const createdCode = useSelector(getCreatedCodeSelector)
    const location = useLocation()

    const onChangeViewHandler = React.useCallback((items: SelectItems<IssueViewList>) => {
      if (items[0]) {
        switch (items[0].code) {
          case IssueViewList.LINK:
            dispatch(CreateNotePatternIssueActions.setViewLink())
            break
          case IssueViewList.IMAGE:
            dispatch(CreateNotePatternIssueActions.setViewImage())
            break
        }
      }
    }, [dispatch])

    const onChangeLinkHandler = React.useCallback((link: string) => {
      dispatch(CreateNotePatternIssueActions.setLinkIssue(link))
    }, [dispatch])

    const onClickHandler = React.useCallback(() => {
      dispatch(CreateNotePatternArticleService(filesState))
      dispatch(NoteBaseFieldsActions.setIsLoading(true))
      dispatch(NotesTypesActions.setIsLoading(true))
    }, [dispatch, filesState])

    const onChangeImageIssueHandler = React.useCallback((files: Files) => {
      setFiles(files)
    }, [])

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
        <SelectField
          label={t('input-pattern-issue-field-view-label')}
          isLoading={isLoading}
          items={viewOptions}
          selected={[viewOptions[0]]}
          onChange={onChangeViewHandler}
          validation={validation?.isLinkView ?? validation?.isImageView}
          className={className}
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
          />
        ))}

        <HStack justify={'flex-end'}>
          <Button
            onClick={onClickHandler}
            size={'large'}
            disabled={isLoading}
            className={className}
          >
            {t('button-create')}
          </Button>
        </HStack>
      </DynamicReducerLoader>
    )
  })
