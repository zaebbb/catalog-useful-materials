import MetaImage from '@assets/image/pages/note-view-page.png'
import { UserEdit } from '@features/UserEdit'
import { StickyLayout } from '@layout/StickyLayout'
import { Page } from '@ui-kit/Page'
import { AdminSidebar } from '@widgets/AdminSidebar'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

const UserEditPage: React.FC = memo(() => {
  const { t } = useTranslation('users-page')

  const {
    email,
  } = useParams<{
    email: string
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
        Content={<UserEdit email={email} />}
      />
    </Page>
  )
})

export default UserEditPage
