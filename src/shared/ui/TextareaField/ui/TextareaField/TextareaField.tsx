import { type DefaultOnChangeOptions } from '@ui-kit/InputField'
import { Loader } from '@ui-kit/Loader'
import React, { Suspense } from 'react'
import {
  type OnChangeTextarea,
  type TextareaFieldBaseProps,
} from '../../lib/types/TextareaFieldBaseTypes'
import { TextareaFieldBaseAsync } from '../TextareaFieldBase/TextareaFieldBase.async'

export const TextareaField =
  <O extends DefaultOnChangeOptions>(
    props: TextareaFieldBaseProps<O>
  ) => (
    <Suspense fallback={<Loader />}>
      <TextareaFieldBaseAsync
        {...props}
        onChange={props.onChange as OnChangeTextarea<DefaultOnChangeOptions>}
      />
    </Suspense>
  )
