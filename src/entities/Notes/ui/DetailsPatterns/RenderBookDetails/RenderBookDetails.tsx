import { AppLink } from '@ui-kit/AppLink'
import { Button } from '@ui-kit/Button'
import { DocView } from '@ui-kit/DocView'
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
          <DocView
            filename={pattern.fileBook.value}
            isButtonRender
          />
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
