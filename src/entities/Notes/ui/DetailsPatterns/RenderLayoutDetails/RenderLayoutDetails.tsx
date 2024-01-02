import { AppImage } from '@ui-kit/AppImage'
import { AppLink } from '@ui-kit/AppLink'
import { Button } from '@ui-kit/Button'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { type PatternLayout } from '../../../model/types/NotesDetailsSchema'

interface RenderLayoutDetailsProps {
  pattern?: PatternLayout
}

export const RenderLayoutDetails: React.FC<RenderLayoutDetailsProps> =
  memo((props: RenderLayoutDetailsProps) => {
    const {
      pattern,
    } = props
    const { t } = useTranslation('note-view-page')

    if (!pattern) {
      return null
    }

    return (
      <>
        {pattern.imageLayout.value && (
          <AppImage
            src={pattern.imageLayout.value}
          />
        )}

        {pattern.linkLayout.value && (
          <AppLink
            to={pattern.linkLayout.value}
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
