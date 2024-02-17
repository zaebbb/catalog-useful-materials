import MetaImage from '@assets/image/pages/note-view-page.png'
import { CreateCategoryForm } from '@features/CreateCategory'
import { StickyLayout } from '@layout/StickyLayout'
import { Page } from '@ui-kit/Page'
import { AdminSidebar } from '@widgets/AdminSidebar'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

const CreateCategoryPage: React.FC = memo(() => {
  const { t } = useTranslation('categories-page')

  return (
    <Page
      title={t('page-title')}
      description={t('page-description')}
      keywords={t('page-keywords')}
      imageLink={MetaImage}
    >
      <StickyLayout
        ContentLeft={<AdminSidebar />}
        Content={<CreateCategoryForm />}
      />
    </Page>
  )
})

export default CreateCategoryPage
