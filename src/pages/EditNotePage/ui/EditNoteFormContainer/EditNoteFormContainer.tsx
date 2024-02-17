import { EditNoteForm } from '@widgets/EditNoteForm'
import React, { memo } from 'react'

interface EditNotePageProps {
  code?: string
}

export const EditNoteFormContainer: React.FC<EditNotePageProps> =
  memo((props: EditNotePageProps) => {
    return (
      <EditNoteForm code={props.code} />
    )
  })
