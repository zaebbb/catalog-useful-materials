import { UserNotesList } from '@entities/Notes'
import { Page } from '@ui-kit/Page'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

interface UserNotesProps {
  className?: string
}

const UserNotes: React.FC<UserNotesProps> = memo((props: UserNotesProps) => {
  const { className } = props
  const { t } = useTranslation('notes-view-page')

  return (
    <Page title={t('page-title')} className={className}>
      <UserNotesList />
    </Page>
  )
})

export default UserNotes
