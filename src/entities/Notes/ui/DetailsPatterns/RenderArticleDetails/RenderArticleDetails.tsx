import { AppImage } from '@ui-kit/AppImage'
import { AppLink } from '@ui-kit/AppLink'
import { Button } from '@ui-kit/Button'
import { Video } from '@ui-kit/Video'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { type PatternArticle } from '../../../model/types/NotesDetailsSchema'

interface RenderArticleDetailsProps {
  pattern?: PatternArticle
}

export const RenderArticleDetails: React.FC<RenderArticleDetailsProps> =
  memo((props: RenderArticleDetailsProps) => {
    const {
      pattern,
    } = props
    const { t } = useTranslation('note-view-page')

    if (!pattern) {
      return null
    }

    return (
      <>
        {pattern.image.value && (
          <AppImage
            src={pattern.image.value}
          />
        )}

        {pattern.linkVideo.value && (
          <Video
            src={pattern.linkVideo.value}
          />
        )}

        <AppLink
          to={pattern.linkNote.value}
          isBlank
        >
          <Button>
            {t('details-link-view')}
          </Button>
        </AppLink>
      </>
    )
  })
