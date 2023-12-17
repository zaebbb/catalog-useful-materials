import { Loader } from '@ui-kit/Loader'
import React, { memo, Suspense } from 'react'
import { type TextareaFieldBaseProps } from '../../lib/types/TextareaFieldBaseTypes'
import { TextareaFieldBaseAsync } from '../TextareaFieldBase/TextareaFieldBase.async'

export const TextareaField: React.FC<TextareaFieldBaseProps> =
  memo((props: TextareaFieldBaseProps) => (
    <Suspense fallback={<Loader />}>
      <TextareaFieldBaseAsync {...props} />
    </Suspense>
  ))
