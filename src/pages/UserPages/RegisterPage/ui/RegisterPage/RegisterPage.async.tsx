import React from 'react'

export const RegisterPageAsync =
  React.lazy(async () => await import('./RegisterPage'))
