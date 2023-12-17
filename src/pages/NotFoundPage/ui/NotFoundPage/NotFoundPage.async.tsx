import React from 'react'

export const NotFoundPageAsync =
  React.lazy(async () => await import('./NotFoundPage'))
