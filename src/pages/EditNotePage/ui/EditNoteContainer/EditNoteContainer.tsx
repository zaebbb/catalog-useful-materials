import { VStack } from '@ui-kit/Stack'
import React, { memo } from 'react'
import {
  EditNoteFormContainer,
} from '../EditNoteFormContainer/EditNoteFormContainer'
import {
  EditNoteTitleContainer,
} from '../EditNoteTitleContainer/EditNoteTitleContainer'

interface EditNotePageProps {
  code?: string
}

export const EditNoteContainer: React.FC<EditNotePageProps> =
  memo((props: EditNotePageProps) => (
    <VStack gap={40}>
      <EditNoteTitleContainer />
      <EditNoteFormContainer code={props.code} />
    </VStack>
  ))
