import MetaImage from '@assets/image/pages/note-view-page.png'
import { StickyLayout } from '@layout/StickyLayout'
import { Page } from '@ui-kit/Page'
import { AdminSidebar } from '@widgets/AdminSidebar'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import {
  TagsPageContentContainer,
} from '../TagsPageContentContainer/TagsPageContentContainer'

const TagsPage: React.FC = memo(() => {
  const { t } = useTranslation('tags-page')

  return (
    <Page
      title={t('page-title')}
      description={t('page-description')}
      keywords={t('page-keywords')}
      imageLink={MetaImage}
    >
      <StickyLayout
        ContentLeft={<AdminSidebar />}
        Content={<TagsPageContentContainer />}
      />
    </Page>
  )
})

export default TagsPage
