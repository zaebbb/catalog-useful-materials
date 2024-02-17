import MetaImage from '@assets/image/pages/about-page.png'
import { Page } from '@ui-kit/Page'
import { VStack } from '@ui-kit/Stack'
import { Text } from '@ui-kit/Text'
import { TitleLarge } from '@ui-kit/Title'
import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage: React.FC = React.memo(() => {
  const { t } = useTranslation('about-page')

  return (
    <Page
      title={t('page-title')}
      description={t('page-description')}
      keywords={t('page-keywords')}
      imageLink={MetaImage}
    >
      <VStack gap={40}>
        <TitleLarge>
          {t('about-page-title')}
        </TitleLarge>

        <VStack gap={12}>
          <Text type={'large'}>
            {t('text-1')}
          </Text>
          <Text type={'large'}>
            {t('text-2')}
          </Text>
          <Text type={'large'}>
            {t('text-3')}
          </Text>
        </VStack>
      </VStack>
    </Page>
  )
})

export default AboutPage
