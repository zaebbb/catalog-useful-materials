import React from 'react'

export const UserNotesAsync =
  React.lazy(async () => await import ('./UserNotes'))
