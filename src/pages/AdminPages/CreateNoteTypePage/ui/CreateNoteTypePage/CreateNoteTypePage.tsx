import MetaImage from '@assets/image/pages/note-view-page.png'
import { CreateNoteTypeForm } from '@features/CreateNoteTypePattern'
import { StickyLayout } from '@layout/StickyLayout'
import { Page } from '@ui-kit/Page'
import { AdminSidebar } from '@widgets/AdminSidebar'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

const CreateNoteTypePage: React.FC = memo(() => {
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
        Content={<CreateNoteTypeForm />}
      />
    </Page>
  )
})

export default CreateNoteTypePage
