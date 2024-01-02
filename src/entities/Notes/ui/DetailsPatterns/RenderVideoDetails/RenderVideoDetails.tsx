import { Video } from '@ui-kit/Video'
import React, { memo } from 'react'
import { type PatternVideo } from '../../../model/types/NotesDetailsSchema'

interface RenderVideoDetailsProps {
  pattern?: PatternVideo
}

export const RenderVideoDetails: React.FC<RenderVideoDetailsProps> =
  memo((props: RenderVideoDetailsProps) => {
    const {
      pattern,
    } = props

    if (!pattern) {
      return null
    }

    return (
      <>
        {pattern.linkVideo.value && (
          <Video src={pattern.linkVideo.value} />
        )}
      </>
    )
  })
