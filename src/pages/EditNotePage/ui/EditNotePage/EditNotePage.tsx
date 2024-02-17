import MetaImage from '@assets/image/pages/create-note-page.png'
import { StickyLayout } from '@layout/StickyLayout'
import { Page } from '@ui-kit/Page'
import { ProfileSidebar } from '@widgets/ProfileSidebar'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { EditNoteContainer } from '../EditNoteContainer/EditNoteContainer'

const EditNotePage: React.FC = memo(() => {
  const { t } = useTranslation('edit-note-page')

  const {
    id,
  } = useParams<{
    id: string
  }>()

  return (
    <Page
      title={t('page-title')}
      description={t('page-description')}
      keywords={t('page-keywords')}
      imageLink={MetaImage}
    >
      <StickyLayout
        ContentLeft={<ProfileSidebar />}
        Content={<EditNoteContainer code={id} />}
      />
    </Page>
  )
})

export default EditNotePage
