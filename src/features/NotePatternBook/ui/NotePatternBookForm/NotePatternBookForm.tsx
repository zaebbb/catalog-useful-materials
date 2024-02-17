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
  getIsFileViewSelector, getIsLinkViewSelector,
  getIsLoadingSelector, getLinkBookSelector, getRemoteFileBookEditSelector, getSaveCodeSelector,
  getValidationSelector,
} from '../../model/selectors/NotePatternBookSelectors'
import { InitEditBookData } from '../../model/services/InitEditBookData'
import {
  SaveNotePatternBook as CreateNotePatternBookService,
} from '../../model/services/SaveNotePatternBook'
import {
  NotePatternBookReducer, NotePatternBookActions,
} from '../../model/slice/NotePatternBookSlice'
import {
  BookViewList,
} from '../../model/types/NotePatternBookSchema'

interface CreateNotePatternBookProps {
  className?: string
  mode: NoteMode
}

const reducers: ReducerList = {
  notePatternBook: NotePatternBookReducer,
}

export const NotePatternBookForm: React.FC<CreateNotePatternBookProps> =
  memo((props: CreateNotePatternBookProps) => {
    const {
      className,
      mode,
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
    const saveCode = useSelector(getSaveCodeSelector)
    const remoteBook = useSelector(getRemoteFileBookEditSelector)
    const location = useLocation()

    const onChangeViewHandler = React.useCallback((items: SelectItems<BookViewList>) => {
      if (items[0]) {
        switch (items[0].code) {
          case BookViewList.LINK:
            dispatch(NotePatternBookActions.setViewLink())
            break
          case BookViewList.FILE:
            dispatch(NotePatternBookActions.setViewFile())
            break
        }
      }
    }, [dispatch])

    const onChangeLinkHandler = React.useCallback((link: string) => {
      dispatch(NotePatternBookActions.setLinkBook(link))
    }, [dispatch])

    const onClickHandler = React.useCallback(() => {
      dispatch(CreateNotePatternBookService({
        files: filesState,
        mode,
      }))

      dispatch(NoteBaseFieldsActions.setIsLoading(true))
      dispatch(NotesTypesActions.setIsLoading(true))
    }, [dispatch, filesState, mode])

    const onChangeImageBookHandler = React.useCallback((files: Files) => {
      setFiles(files)
    }, [])

    React.useEffect(() => {
      if (mode === 'edit') {
        dispatch(InitEditBookData())
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
          label={t('input-pattern-book-field-view-label')}
          isLoading={isLoading}
          items={viewOptions}
          selected={[isViewLink ? viewOptions[1] : viewOptions[0]]}
          onChange={onChangeViewHandler}
          validation={validation?.isLinkView ?? validation?.isFileView}
          className={className}
          isRequired
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
            isRequired
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
            isRequired
            remoteFiles={remoteBook ? [remoteBook] : []}
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
