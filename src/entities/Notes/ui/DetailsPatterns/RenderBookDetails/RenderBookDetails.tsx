import { AppLink } from '@ui-kit/AppLink'
import { Button } from '@ui-kit/Button'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { type PatternBook } from '../../../model/types/NotesDetailsSchema'

interface RenderBookDetailsProps {
  pattern?: PatternBook
}

export const RenderBookDetails: React.FC<RenderBookDetailsProps> =
  memo((props: RenderBookDetailsProps) => {
    const {
      pattern,
    } = props
    const { t } = useTranslation('note-view-page')

    if (!pattern) {
      return null
    }

    return (
      <>
        {pattern.fileBook.value && (
          // TODO: реализовать просмотр файлов PDF DOCX и т.п.
          <AppLink
            to={pattern.fileBook.value}
            isBlank
          >
            <Button>
              {t('details-link-view')}
            </Button>
          </AppLink>
        )}

        {pattern.linkBook.value && (
          <AppLink
            to={pattern.linkBook.value}
            isBlank
          >
            <Button>
              {t('details-link-view')}
            </Button>
          </AppLink>
        )}
      </>
    )
  })
