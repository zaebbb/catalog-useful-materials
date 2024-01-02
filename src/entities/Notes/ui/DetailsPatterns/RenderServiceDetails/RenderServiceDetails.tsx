import { AppLink } from '@ui-kit/AppLink'
import { Button } from '@ui-kit/Button'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { type PatternService } from '../../../model/types/NotesDetailsSchema'

interface RenderServiceDetailsProps {
  pattern?: PatternService
}

export const RenderServiceDetails: React.FC<RenderServiceDetailsProps> =
  memo((props: RenderServiceDetailsProps) => {
    const {
      pattern,
    } = props
    const { t } = useTranslation('note-view-page')

    if (!pattern) {
      return null
    }

    return (
      <>
        {pattern.linkService.value && (
          <AppLink
            to={pattern.linkService.value}
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
