import { Code } from '@ui-kit/Code'
import { Text } from '@ui-kit/Text'
import React, { memo } from 'react'
import { type PatternCode } from '../../../model/types/NotesDetailsSchema'

interface RenderCodeDetailsProps {
  pattern?: PatternCode
}

export const RenderCodeDetails: React.FC<RenderCodeDetailsProps> =
  memo((props: RenderCodeDetailsProps) => {
    const {
      pattern,
    } = props

    if (!pattern) {
      return null
    }

    return (
      <>
        {pattern.code.value && (
          <Text>
            <Code code={pattern.code.value} />
          </Text>
        )}
      </>
    )
  })
