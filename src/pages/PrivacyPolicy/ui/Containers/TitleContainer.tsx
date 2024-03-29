import { Span } from '@ui-kit/Text'
import { TitleLarge } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

export const TitleContainer: React.FC = memo(() => {
  const { t } = useTranslation('privacy-policy')

  return (
    <TitleLarge align={'center'}>
      <Span
        color={'gradient'}
        content={t('main-title-span-part', { SITE_URL: window.location.origin })}
      />
      {' '}
      {t('main-title-part', { SITE_URL: window.location.origin })}
    </TitleLarge>
  )
})
