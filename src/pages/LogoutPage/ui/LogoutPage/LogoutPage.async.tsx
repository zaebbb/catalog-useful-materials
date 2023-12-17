import React from 'react'

export const LogoutPageAsync =
  React.lazy(async () => await import('./LogoutPage'))
