import React from 'react'

export const CodeAsync = React.lazy(async () => await import ('./CodeComponent'))
