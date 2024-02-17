import { Span } from '@ui-kit/Text'
import { TitleLarge } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

export const AdminPageContentContainer: React.FC = memo(() => {
  const { t } = useTranslation('admin-page')

  return (
    <TitleLarge>
      {t('title-1')}
      {' '}
      <Span
        color={'gradient'}
        content={t('title-2')}
      />
    </TitleLarge>
  )
})
