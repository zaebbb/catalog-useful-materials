import NotFoundIcon from '@assets/icons/not-found-icon.png'
import MetaImage from '@assets/image/pages/not-found-page.jpg'
import { AppImage } from '@ui-kit/AppImage'
import { Page } from '@ui-kit/Page'
import { HStack, VStack } from '@ui-kit/Stack'
import { Text } from '@ui-kit/Text'
import { TitleMedium } from '@ui-kit/Title'
import React from 'react'
import { useTranslation } from 'react-i18next'
import cls from './NotFoundPage.module.scss'

const NotFoundPage: React.FC = React.memo(() => {
  const { t } = useTranslation('not-found-page')
  return (
    <Page
      title={t('page-title')}
      description={t('page-description')}
      keywords={t('page-keywords')}
      imageLink={MetaImage}
    >
      <HStack gap={0} justify={'space-between'} isWrap>
        <VStack gap={12}>
          <TitleMedium>
            {t('title')}
          </TitleMedium>
          <Text>
            {t('description')}
          </Text>
        </VStack>

        <AppImage
          className={cls.AccessIcon}
          src={NotFoundIcon}
        />
      </HStack>
    </Page>
  )
})

export default NotFoundPage
