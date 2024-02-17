import { Text } from '@ui-kit/Text'
import { TitleSmall } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

export const Terms: React.FC = memo(() => {
  const { t } = useTranslation('privacy-policy')

  return (
    <>
      <TitleSmall>{t('part-7-title', { SITE_URL: window.location.origin })}</TitleSmall>
      <Text>{t('part-7-text-1', { SITE_URL: window.location.origin })}</Text>

      <TitleSmall>{t('part-8-title', { SITE_URL: window.location.origin })}</TitleSmall>
      <Text>{t('part-8-text-1', { SITE_URL: window.location.origin })}</Text>
      <Text>{t('part-8-text-2', { SITE_URL: window.location.origin })}</Text>

      <TitleSmall>{t('part-9-title', { SITE_URL: window.location.origin })}</TitleSmall>
      <Text>{t('part-9-text-1', { SITE_URL: window.location.origin })}</Text>

      <TitleSmall>{t('part-10-title', { SITE_URL: window.location.origin })}</TitleSmall>
      <Text>{t('part-10-text-1', { SITE_URL: window.location.origin })}</Text>

      <TitleSmall>{t('part-11-title', { SITE_URL: window.location.origin })}</TitleSmall>
      <Text>{t('part-11-text-1', { SITE_URL: window.location.origin })}</Text>

      <TitleSmall>{t('part-12-title', { SITE_URL: window.location.origin })}</TitleSmall>
      <Text>{t('part-12-text-1', { SITE_URL: window.location.origin })}</Text>
    </>
  )
})
