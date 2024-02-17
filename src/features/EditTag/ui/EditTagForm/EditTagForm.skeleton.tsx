import { Skeleton } from '@ui-kit/Skeleton'
import { VStack } from '@ui-kit/Stack'
import React, { memo } from 'react'

interface CreateTagFormSkeletonProps {
  className?: string
}

export const EditTagFormSkeleton: React.FC<CreateTagFormSkeletonProps> =
  memo((props: CreateTagFormSkeletonProps) => {
    const {
      className,
    } = props

    return (
      <VStack className={className} gap={24}>
        <Skeleton width={'400px'} height={'40px'} />

        <VStack className={className} gap={16}>
          <Skeleton width={'300px'} height={'40px'} />
          <Skeleton width={'250px'} height={'40px'} />
          <Skeleton width={'150px'} radius={'50px'} />
        </VStack>
      </VStack>

    )
  })
