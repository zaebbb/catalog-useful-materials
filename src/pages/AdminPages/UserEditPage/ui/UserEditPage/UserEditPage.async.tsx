import React from 'react'

export const UserEditPageAsync =
  React.lazy(async () => await import('./UserEditPage'))
