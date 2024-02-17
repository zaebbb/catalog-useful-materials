import React from 'react'

export const TagsPageAsync =
  React.lazy(async () => await import('./TagsPage'))
