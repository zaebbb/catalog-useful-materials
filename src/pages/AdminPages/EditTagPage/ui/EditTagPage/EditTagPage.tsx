import MetaImage from '@assets/image/pages/note-view-page.png'
import { EditTagForm } from '@features/EditTag'
import { StickyLayout } from '@layout/StickyLayout'
import { Page } from '@ui-kit/Page'
import { AdminSidebar } from '@widgets/AdminSidebar'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

const EditTagPage: React.FC = memo(() => {
  const { t } = useTranslation('tags-page')

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
        ContentLeft={<AdminSidebar />}
        Content={<EditTagForm code={id} />}
      />
    </Page>
  )
})

export default EditTagPage
