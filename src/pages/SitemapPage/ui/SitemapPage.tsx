import MetaImage from '@assets/image/pages/sitemap-page.jpg'
import { Page } from '@ui-kit/Page'
import { VStack } from '@ui-kit/Stack'
import { TitleLarge } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { RenderLinkBlock } from '../lib/components/RenderLinkBlock'
import { useSitemapItems } from '../lib/hooks/useSitemapItems'

interface SitemapPageProps {
  className?: string
}

const SitemapPage: React.FC<SitemapPageProps> = memo((props: SitemapPageProps) => {
  const { className } = props
  const { t } = useTranslation('sitemap-page')
  const {
    infoBlock,
  } = useSitemapItems()

  return (
    <Page
      title={t('page-title')}
      description={t('page-description')}
      imageLink={MetaImage}
      keywords={t('page-keywords')}
      className={className}
    >
      <VStack gap={40}>
        <TitleLarge>
          {t('title')}
        </TitleLarge>

        <VStack gap={24}>
          <RenderLinkBlock block={infoBlock} />
        </VStack>
      </VStack>
    </Page>
  )
})

export default SitemapPage
