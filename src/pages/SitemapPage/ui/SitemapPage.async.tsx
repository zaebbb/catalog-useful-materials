import React from 'react'

export const SitemapPageAsync =
  React.lazy(async () => await import ('./SitemapPage'))
