import { StickyLayout } from '@layout/StickyLayout'
import { DynamicReducerLoader, type ReducerList } from '@lib/components/DynamicReducerLoader'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { Span } from '@ui-kit/Text'
import { TitleMedium } from '@ui-kit/Title'
import React, { memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  getIsLoadingSelector,
  getNoteDetailsSelector,
} from '../../model/selectors/NoteDetailsSelectors'
import { FetchNoteData } from '../../model/services/FetchNoteData'
import { NoteDetailsReducer } from '../../model/slice/NoteDetailsSlice'
import { NoteDetailsContent } from '../NoteDetailsContent/NoteDetailsContent'
import { NoteDetailsSidebar } from '../NoteDetailsSidebar/NoteDetailsSidebar'

interface NotesDetailsProps {
  className?: string
  id?: string
}

const reducers: ReducerList = {
  noteDetails: NoteDetailsReducer,
}

export const NotesDetails: React.FC<NotesDetailsProps> = memo((props: NotesDetailsProps) => {
  const {
    className,
    id = '',
  } = props
  const { t } = useTranslation('note-view-page')
  const dispatch = useAppDispatch()
  const note = useSelector(getNoteDetailsSelector)
  const isLoading = useSelector(getIsLoadingSelector)

  useEffect(() => {
    if (id) {
      dispatch(FetchNoteData(id))
    }
  }, [dispatch, id])

  return (
    <DynamicReducerLoader reducers={reducers}>
      {isLoading && (
        <span />
        //   TODO: СКЕЛЕТОН сделать
      )}

      {!isLoading && !note && (
        <TitleMedium>
          {t('details-view-note-found-1')}
          {' '}
          <Span
            color={'gradient'}
            content={t('details-view-note-found-2')}
          />
        </TitleMedium>
      )}

      {!isLoading && note && (
        <StickyLayout
          Content={<NoteDetailsContent />}
          ContentLeft={<NoteDetailsSidebar />}
          className={className}
        />
      )}
    </DynamicReducerLoader>
  )
})
