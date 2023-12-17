import React from 'react'

export const TextareaFieldBaseAsync =
  React.lazy(async () => await import('./TextareaFieldBase'))
