import { AppImage } from '@ui-kit/AppImage'
import { AppLink } from '@ui-kit/AppLink'
import { Button } from '@ui-kit/Button'
import { HStack } from '@ui-kit/Stack'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { type PatternTechnology } from '../../../model/types/NotesDetailsSchema'

interface RenderTechnologyDetailsProps {
  pattern?: PatternTechnology
}

export const RenderTechnologyDetails: React.FC<RenderTechnologyDetailsProps> =
  memo((props: RenderTechnologyDetailsProps) => {
    const {
      pattern,
    } = props
    const { t } = useTranslation('note-view-page')

    if (!pattern) {
      return null
    }

    return (
      <>
        {pattern.icon.value && (
          <AppImage src={pattern.icon.value} />
        )}

        <HStack justify={'flex-start'} gap={16}>
          {pattern.linkTechnology.value && (
            <AppLink to={pattern.linkTechnology.value} isBlank>
              <Button>
                {t('details-link-view-pattern-technology-tech')}
              </Button>
            </AppLink>
          )}

          {pattern.linkDocs.value && (
            <AppLink to={pattern.linkDocs.value} isBlank>
              <Button fill={'border'}>
                {t('details-link-view-pattern-technology-docs')}
              </Button>
            </AppLink>
          )}

          {pattern.linkInstall.value && (
            <AppLink to={pattern.linkInstall.value} isBlank>
              <Button theme={'gradient'}>
                {t('details-link-view-pattern-technology-install')}
              </Button>
            </AppLink>
          )}
        </HStack>
      </>
    )
  })
