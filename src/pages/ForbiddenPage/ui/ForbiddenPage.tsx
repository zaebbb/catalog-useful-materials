import ForbiddenIcon from '@assets/icons/forbidden-icon.png'
import { AppImage } from '@ui-kit/AppImage'
import { Page } from '@ui-kit/Page'
import { HStack, VStack } from '@ui-kit/Stack'
import { Text } from '@ui-kit/Text'
import { TitleMedium } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './ForbiddenPage.module.scss'

interface ForbiddenPageProps {
  className?: string
}

const ForbiddenPage: React.FC<ForbiddenPageProps> = memo((props: ForbiddenPageProps) => {
  const { className } = props
  const { t } = useTranslation('forbidden-page')

  return (
    <Page title={t('page-title')} className={className}>
      <HStack gap={0} justify={'space-between'}>
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
          src={ForbiddenIcon}
        />
      </HStack>
    </Page>
  )
})

export default ForbiddenPage
