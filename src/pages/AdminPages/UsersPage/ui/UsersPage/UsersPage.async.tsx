import React from 'react'

export const UsersPageAsync =
  React.lazy(async () => await import('./UsersPage'))
