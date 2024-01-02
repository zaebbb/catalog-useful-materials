import { AppLink } from '@ui-kit/AppLink'
import { Button } from '@ui-kit/Button'
import { Span, Text } from '@ui-kit/Text'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { type PatternCourse } from '../../../model/types/NotesDetailsSchema'

interface RenderCourseDetailsProps {
  pattern?: PatternCourse
}

export const RenderCourseDetails: React.FC<RenderCourseDetailsProps> =
  memo((props: RenderCourseDetailsProps) => {
    const {
      pattern,
    } = props
    const { t } = useTranslation('note-view-page')

    if (!pattern) {
      return null
    }

    return (
      <>
        {pattern.authorCourse.value && (
          <Text>
            {t('details-link-view-pattern-course-author')}
            {' '}
            <Span
              color={'gradient'}
              content={pattern.authorCourse.value}
            />
          </Text>
        )}

        {pattern.linkCourse.value && (
          <AppLink to={pattern.linkCourse.value} isBlank>
            <Button>
              {t('details-link-view')}
            </Button>
          </AppLink>
        )}
      </>
    )
  })
