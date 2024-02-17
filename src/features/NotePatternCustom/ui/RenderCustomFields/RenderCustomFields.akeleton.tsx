import { Skeleton } from '@ui-kit/Skeleton'
import { VStack } from '@ui-kit/Stack'
import React, { memo } from 'react'

export const RenderCustomFieldsSkeleton: React.FC = memo(() => (
  <>
    <VStack gap={12}>
      <Skeleton width={'400px'} height={'40px'} />
      <Skeleton width={'300px'} height={'24px'} />
    </VStack>
    <VStack gap={12}>
      <Skeleton width={'400px'} height={'40px'} />
      <Skeleton width={'300px'} height={'24px'} />
    </VStack>
    <VStack gap={12}>
      <Skeleton width={'400px'} height={'40px'} />
      <Skeleton width={'300px'} height={'24px'} />
    </VStack>
  </>
)
)
