import React from 'react'

export const LoginPageAsync =
  React.lazy(async () => await import('./LoginPage'))
