import { StickyLayout } from '@layout/StickyLayout'
import { DynamicReducerLoader, type ReducerList } from '@lib/components/DynamicReducerLoader'
import { MetaInfo } from '@lib/components/MetaInfo'
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
import {
  NoteDetailsContentSkeleton,
} from '../NoteDetailsContent/NoteDetailsContent.skeleton'
import { NoteDetailsSidebar } from '../NoteDetailsSidebar/NoteDetailsSidebar'
import {
  NoteDetailsSidebarSkeleton,
} from '../NoteDetailsSidebar/NoteDetailsSidebar.skeleton'

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
        <StickyLayout
          Content={<NoteDetailsContentSkeleton />}
          ContentLeft={<NoteDetailsSidebarSkeleton />}
          className={className}
        />
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
        <>
          <MetaInfo
            title={note.title}
            description={note.description}
            keywords={note.tags.map((tag): string => tag.name).join(',')}
            imageLink={note.user.avatar ?? ''}
          />

          <StickyLayout
            Content={<NoteDetailsContent />}
            ContentLeft={<NoteDetailsSidebar code={id} />}
            className={className}
          />
        </>
      )}
    </DynamicReducerLoader>
  )
})
