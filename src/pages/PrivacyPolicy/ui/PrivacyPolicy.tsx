import { Page } from '@ui-kit/Page'
import { VStack } from '@ui-kit/Stack'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Privacy } from './Containers'
import cls from './PrivacyPolicy.module.scss'

const PrivacyPolicy: React.FC = memo(() => {
  const { t } = useTranslation('privacy-policy')

  return (
    <Page title={t('page-title')}>
      <VStack gap={40}>
        <Privacy.TitleContainer />

        <VStack gap={24} className={cls.PrivacyPolicy}>
          <Privacy.SubTitleContainer />
          <Privacy.GeneralContainer />
        </VStack>
      </VStack>
    </Page>
  )
})

export default PrivacyPolicy
