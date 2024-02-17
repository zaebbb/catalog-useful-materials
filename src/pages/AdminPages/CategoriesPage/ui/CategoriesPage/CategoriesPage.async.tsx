import React from 'react'

export const CategoriesPageAsync =
  React.lazy(async () => await import('./CategoriesPage'))
