import MetaImage from '@assets/image/pages/note-view-page.png'
import { StickyLayout } from '@layout/StickyLayout'
import { Page } from '@ui-kit/Page'
import { AdminSidebar } from '@widgets/AdminSidebar'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import {
  NotesTypesPageContentContainer,
} from '../NotesTypesPageContentContainer/NotesTypesPageContentContainer'

const NotesTypesPage: React.FC = memo(() => {
  const { t } = useTranslation('notes-types-page')

  return (
    <Page
      title={t('page-title')}
      description={t('page-description')}
      keywords={t('page-keywords')}
      imageLink={MetaImage}
    >
      <StickyLayout
        ContentLeft={<AdminSidebar />}
        Content={<NotesTypesPageContentContainer />}
      />
    </Page>
  )
})

export default NotesTypesPage
