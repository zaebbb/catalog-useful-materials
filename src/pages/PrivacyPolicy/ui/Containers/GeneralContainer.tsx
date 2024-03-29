import { Text } from '@ui-kit/Text'
import { TitleSmall } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

export const GeneralContainer: React.FC = memo(() => {
  const { t } = useTranslation('privacy-policy')

  return (
    <>
      <TitleSmall>{t('part-1-title', { SITE_URL: window.location.origin })}</TitleSmall>
      <Text>{t('part-1-text-1', { SITE_URL: window.location.origin })}</Text>
      <Text>{t('part-1-text-2', { SITE_URL: window.location.origin })}</Text>
    </>
  )
})
