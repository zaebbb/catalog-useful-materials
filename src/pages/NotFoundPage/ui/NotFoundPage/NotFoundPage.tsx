import React from 'react'
import { useTranslation } from 'react-i18next'

const NotFoundPage: React.FC = React.memo(() => {
  const { t } = useTranslation()
  return (
    <div>
      <h1>{t('page-not-found')}</h1>
    </div>
  )
})

export default NotFoundPage
