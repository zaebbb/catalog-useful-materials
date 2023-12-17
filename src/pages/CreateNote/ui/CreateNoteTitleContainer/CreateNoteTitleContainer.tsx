import { Span } from '@ui-kit/Text'
import { TitleLarge } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

interface CreateNoteTitleContainerProps {
  className?: string
}

export const CreateNoteTitleContainer: React.FC<CreateNoteTitleContainerProps> =
  memo((props: CreateNoteTitleContainerProps) => {
    const { className } = props
    const { t } = useTranslation('create-note-page')

    return (
      <TitleLarge className={className}>
        <Span color={'gradient'} content={t('title-create-note-1')} />
        {' '}
        {t('title-create-note-2')}
      </TitleLarge>
    )
  })
