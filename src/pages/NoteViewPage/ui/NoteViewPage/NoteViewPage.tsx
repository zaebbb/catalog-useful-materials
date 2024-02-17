import MetaImage from '@assets/image/pages/note-view-page.png'
import { NotesDetails } from '@entities/Notes'
import { Page } from '@ui-kit/Page'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

interface NoteViewPageProps {
  className?: string
}

const NoteViewPage: React.FC<NoteViewPageProps> = memo((props: NoteViewPageProps) => {
  const { className } = props
  const { t } = useTranslation('note-view-page')

  const {
    id,
  } = useParams()

  return (
    <Page
      title={t('page-title')}
      description={t('page-description')}
      keywords={t('page-keywords')}
      imageLink={MetaImage}
    >
      <NotesDetails
        id={id}
        className={className}
      />
    </Page>
  )
})

export default NoteViewPage
