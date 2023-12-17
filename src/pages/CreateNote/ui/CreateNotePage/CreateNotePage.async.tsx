import React from 'react'

export const CreateNotePageAsync =
  React.lazy(async () => await import('./CreateNotePage'))
