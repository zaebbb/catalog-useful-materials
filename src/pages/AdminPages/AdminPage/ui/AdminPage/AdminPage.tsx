import MetaImage from '@assets/image/pages/admin-page.jpg'
import { StickyLayout } from '@layout/StickyLayout'
import { Page } from '@ui-kit/Page'
import { AdminSidebar } from '@widgets/AdminSidebar'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import {
  AdminPageContentContainer,
} from '../AdminPageContentContainer/AdminPageContentContainer'

const AdminPage: React.FC = memo(() => {
  const { t } = useTranslation('admin-page')

  return (
    <Page
      title={t('page-title')}
      description={t('page-description')}
      keywords={t('page-keywords')}
      imageLink={MetaImage}
    >
      <StickyLayout
        ContentLeft={<AdminSidebar />}
        Content={<AdminPageContentContainer />}
      />
    </Page>
  )
})

export default AdminPage
