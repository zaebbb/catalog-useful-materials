import { NotesList } from '@entities/Notes/ui/NotesList/NotesList'
import { Span } from '@ui-kit/Text'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useUserNotesList } from '../../api/userNotesListApi'

interface UserNotesListProps {
  className?: string
}
// TODO: найти способ мокать запросы rtk query для storybook
// TODO: вынести в фичу
export const UserNotesList: React.FC<UserNotesListProps> = memo((props: UserNotesListProps) => {
  const { className } = props
  const { t } = useTranslation('notes-view-page')

  const {
    isLoading,
    data: notes,
  } = useUserNotesList()

  React.useEffect(() => {
    console.log(isLoading)
  }, [isLoading])

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

  return (
    <NotesList
      title={title}
      notes={notes?.success}
      className={className}
      isLoading={isLoading}
    />
  )
})
