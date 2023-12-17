import { Loader } from '@ui-kit/Loader'
import React, { memo, Suspense } from 'react'
import { CodeAsync } from './Code.async'

interface CodeProps {
  className?: string
  code?: string
}

export const Code: React.FC<CodeProps> = memo((props: CodeProps) => {
  return (
    <Suspense fallback={<Loader />}>
      <CodeAsync {...props} />
    </Suspense>
  )
})
