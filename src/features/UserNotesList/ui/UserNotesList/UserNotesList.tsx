import { useCategory } from '@entities/Category'
import { NotesList } from '@entities/Notes'
import { useNotesTypes } from '@entities/NotesTypes'
import { useNotesViews } from '@entities/NotesViews'
import { useTags } from '@entities/Tag'
import { getDescriptionSelector, getPageSelector } from '@features/NoteSearch'
import { Span } from '@ui-kit/Text'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useUserNotesList } from '../../api/userNotesListApi'

interface UserNotesListProps {
  className?: string
}

export const UserNotesList: React.FC<UserNotesListProps> = memo((props: UserNotesListProps) => {
  const { className } = props
  const { t } = useTranslation('notes-view-page')

  const description = useSelector(getDescriptionSelector)
  const page = useSelector(getPageSelector)
  const {
    currentCategory,
  } = useCategory()
  const {
    currentView,
  } = useNotesViews()
  const {
    currentTagsIds,
  } = useTags()
  const {
    currentType,
  } = useNotesTypes()

  const {
    isLoading,
    data: notes,
    refetch,
  } = useUserNotesList({
    description,
    categoryId: currentCategory?.id,
    viewId: currentView?.id,
    tagsIds: JSON.stringify(currentTagsIds),
    typeId: currentType?.id,
    page,
  })

  const title = (
    <>
      {t('page-header-1')}
      {' '}
      <Span
        color={'gradient'}
        content={t('page-header-2')}
      />
    </>
  )

  React.useEffect(() => {
    void refetch()
  }, [page, refetch])

  return (
    <NotesList
      title={title}
      notes={notes?.success}
      className={className}
      isLoading={isLoading}
    />
  )
})
