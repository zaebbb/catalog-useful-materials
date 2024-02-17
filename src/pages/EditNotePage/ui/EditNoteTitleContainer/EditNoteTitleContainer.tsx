import { Span } from '@ui-kit/Text'
import { TitleLarge } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

interface EditNoteTitleContainerProps {
  className?: string
}

export const EditNoteTitleContainer: React.FC<EditNoteTitleContainerProps> =
  memo((props: EditNoteTitleContainerProps) => {
    const { className } = props
    const { t } = useTranslation('edit-note-page')

    return (
      <TitleLarge className={className}>
        {t('title-edit-note-1')}
        {' '}
        <Span color={'gradient'} content={t('title-edit-note-2')} />
      </TitleLarge>
    )
  })
