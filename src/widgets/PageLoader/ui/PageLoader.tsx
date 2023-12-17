import { Loader } from '@ui-kit/Loader'
import { HStack } from '@ui-kit/Stack'
import React, { memo } from 'react'
import cls from './PageLoader.module.scss'

interface PageLoaderProps {
  size?: number
}

export const PageLoader: React.FC<PageLoaderProps> = memo((props: PageLoaderProps) => {
  const {
    size = 100,
  } = props

  return (
    <HStack align={'center'} justify={'center'} className={cls.PageLoader}>
      <Loader size={size} />
    </HStack>
  )
})
