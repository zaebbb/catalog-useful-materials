import MetaImage from '@assets/image/pages/create-note-page.png'
import { StickyLayout } from '@layout/StickyLayout'
import { Page } from '@ui-kit/Page'
import { ProfileSidebar } from '@widgets/ProfileSidebar'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { CreateNoteContainer } from '../CreateNoteContainer/CreateNoteContainer'

const CreateNotePage: React.FC = memo(() => {
  const { t } = useTranslation('create-note-page')

  return (
    <Page
      title={t('page-title')}
      description={t('page-description')}
      keywords={t('page-keywords')}
      imageLink={MetaImage}
    >
      <StickyLayout
        ContentLeft={<ProfileSidebar />}
        Content={<CreateNoteContainer />}
      />
    </Page>
  )
})

export default CreateNotePage
