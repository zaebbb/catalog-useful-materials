import { Page } from '@ui-kit/Page'
import React from 'react'
import { useTranslation } from 'react-i18next'

const MainPage: React.FC = React.memo(() => {
  const { t } = useTranslation('main-page')

  return (
    <Page title={t('page-title')}>
      <span />
    </Page>
  )
})

export default MainPage
