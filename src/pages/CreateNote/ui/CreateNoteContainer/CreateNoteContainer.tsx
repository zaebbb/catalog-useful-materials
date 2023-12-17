import { VStack } from '@ui-kit/Stack'
import React, { memo } from 'react'
import {
  CreateNoteFormContainer,
} from '../CreateNoteFormContainer/CreateNoteFormContainer'
import {
  CreateNoteTitleContainer,
} from '../CreateNoteTitleContainer/CreateNoteTitleContainer'

export const CreateNoteContainer: React.FC = memo(() => (
  <VStack gap={40}>
    <CreateNoteTitleContainer />
    <CreateNoteFormContainer />
  </VStack>
))
