import { NoteBaseFieldsActions } from '@entities/Notes'
import { NotesTypesActions } from '@entities/NotesTypes'
import {
  BookViewList,
} from '@features/CreateNotePatternBook/model/types/CreateNotePatternBookSchema'
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
  getCreatedCodeSelector, getIsFileViewSelector, getIsLinkViewSelector,
  getIsLoadingSelector, getLinkBookSelector,
  getValidationSelector,
} from '../../model/selectors/CreateNotePatternBookSelectors'
import {
  CreateNotePatternBook as CreateNotePatternBookService,
} from '../../model/services/CreateNotePatternBook'
import {
  CreateNotePatternBookActions,
  CreateNotePatternBookReducer,
} from '../../model/slice/CreateNotePatternBookSlice'

interface CreateNotePatternBookProps {
  className?: string
}

const reducers: ReducerList = {
  createNotePatternBook: CreateNotePatternBookReducer,
}

export const CreateNotePatternBook: React.FC<CreateNotePatternBookProps> =
  memo((props: CreateNotePatternBookProps) => {
    const {
      className,
    } = props
    const { t } = useTranslation('create-note-pattern')
    const dispatch = useAppDispatch()
    const viewOptions = useSelectViewOptions()

    const [filesState, setFiles] = React.useState<Files>([])

    const isViewLink = useSelector(getIsLinkViewSelector)
    const isViewFile = useSelector(getIsFileViewSelector)
    const linkBook = useSelector(getLinkBookSelector)
    const isLoading = useSelector(getIsLoadingSelector)
    const validation = useSelector(getValidationSelector)
    const createdCode = useSelector(getCreatedCodeSelector)
    const location = useLocation()

    const onChangeViewHandler = React.useCallback((items: SelectItems<BookViewList>) => {
      if (items[0]) {
        switch (items[0].code) {
          case BookViewList.LINK:
            dispatch(CreateNotePatternBookActions.setViewLink())
            break
          case BookViewList.FILE:
            dispatch(CreateNotePatternBookActions.setViewFile())
            break
        }
      }
    }, [dispatch])

    const onChangeLinkHandler = React.useCallback((link: string) => {
      dispatch(CreateNotePatternBookActions.setLinkBook(link))
    }, [dispatch])

    const onClickHandler = React.useCallback(() => {
      dispatch(CreateNotePatternBookService(filesState))
      dispatch(NoteBaseFieldsActions.setIsLoading(true))
      dispatch(NotesTypesActions.setIsLoading(true))
    }, [dispatch, filesState])

    const onChangeImageBookHandler = React.useCallback((files: Files) => {
      setFiles(files)
    }, [])

    React.useEffect(() => {
      console.log('isViewLink', isViewLink)
      console.log('isViewFile', isViewFile)
    }, [isViewFile, isViewLink])

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
          label={t('input-pattern-book-field-view-label')}
          isLoading={isLoading}
          items={viewOptions}
          selected={[viewOptions[0]]}
          onChange={onChangeViewHandler}
          validation={validation?.isLinkView ?? validation?.isFileView}
          className={className}
        />

        {(isViewLink && (
          <InputField
            label={t('input-pattern-book-field-link-label')}
            placeholder={t('input-pattern-book-field-link-placeholder')}
            validation={validation?.linkBook}
            value={linkBook}
            onChange={onChangeLinkHandler}
            className={className}
            isLoading={isLoading}
          />
        ))}

        {(isViewFile && (
          <InputFieldFile
            label={t('input-pattern-book-field-file-label')}
            isMax
            value={filesState}
            validation={validation?.fileBook}
            onChange={onChangeImageBookHandler}
            className={className}
            isLoading={isLoading}
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
