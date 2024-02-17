import MetaImage from '@assets/image/pages/user-notes-page.png'
import { CategoryReducer } from '@entities/Category'
import { NotesTypesReducer } from '@entities/NotesTypes'
import { NotesViewsReducer } from '@entities/NotesViews'
import { TagReducer } from '@entities/Tag'
import { NoteSearchReducer } from '@features/NoteSearch'
import { FetchNextPageUserNotes } from '@features/NoteSearch'
import { DynamicReducerLoader, type ReducerList } from '@lib/components/DynamicReducerLoader'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { Page } from '@ui-kit/Page'
import { UserNotesList } from '@widgets/UserNotesList'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

interface UserNotesProps {
  className?: string
}

const reducers: ReducerList = {
  notesViews: NotesViewsReducer,
  category: CategoryReducer,
  tag: TagReducer,
  noteSearch: NoteSearchReducer,
  notesTypes: NotesTypesReducer,
}

const UserNotes: React.FC<UserNotesProps> = memo((props: UserNotesProps) => {
  const { className } = props
  const { t } = useTranslation('notes-view-page')
  const dispatch = useAppDispatch()

  const onChangeScroll = React.useCallback(() => {
    dispatch(FetchNextPageUserNotes())
  }, [dispatch])

  return (
    <DynamicReducerLoader reducers={reducers}>
      <Page
        title={t('page-title')}
        description={t('page-description')}
        keywords={t('page-keywords')}
        imageLink={MetaImage}
        className={className}
        onScrollEnd={onChangeScroll}
      >
        <UserNotesList />
      </Page>
    </DynamicReducerLoader>
  )
})

export default UserNotes
