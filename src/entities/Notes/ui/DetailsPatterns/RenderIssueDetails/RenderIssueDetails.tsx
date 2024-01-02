import { AppImage } from '@ui-kit/AppImage'
import { AppLink } from '@ui-kit/AppLink'
import { Button } from '@ui-kit/Button'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { type PatternIssue } from '../../../model/types/NotesDetailsSchema'

interface RenderIssueDetailsProps {
  pattern?: PatternIssue
}

export const RenderIssueDetails: React.FC<RenderIssueDetailsProps> =
  memo((props: RenderIssueDetailsProps) => {
    const {
      pattern,
    } = props
    const { t } = useTranslation('note-view-page')

    if (!pattern) {
      return null
    }

    return (
      <>
        {pattern.imageIssue.value && (
          <AppImage
            src={pattern.imageIssue.value}
          />
        )}

        {pattern.linkIssue.value && (
          <AppLink
            to={pattern.linkIssue.value}
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
