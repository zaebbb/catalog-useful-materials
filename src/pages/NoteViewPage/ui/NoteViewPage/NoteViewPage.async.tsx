import React from 'react'

export const NoteViewPageAsync =
  React.lazy(async () => await import('./NoteViewPage'))
