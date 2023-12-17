import { AppPadding } from '@ui-kit/AppPadding'
import { TitleLarge } from '@ui-kit/Title'
import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage: React.FC = React.memo(() => {
  const { t } = useTranslation('about-page')

  return (
    <AppPadding>
      <TitleLarge>
        {t('about-page-title')}
      </TitleLarge>
    </AppPadding>
  )
})

export default AboutPage
