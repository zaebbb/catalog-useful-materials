import { TitleMedium } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

export const SubTitleContainer: React.FC = memo(() => {
  const { t } = useTranslation('privacy-policy')

  return (
    <TitleMedium>
      {t('subtitle', { SITE_URL: window.location.origin })}
    </TitleMedium>
  )
})
