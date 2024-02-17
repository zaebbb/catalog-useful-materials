import { classNames } from '@lib/helpers/classNames'
import { generateKey } from '@lib/helpers/generateKey'
import { Skeleton } from '@ui-kit/Skeleton'
import { HStack, VStack } from '@ui-kit/Stack'
import React, { memo } from 'react'

import cls from './NoteDetailsContent.module.scss'

interface NoteDetailsContentProps {
  className?: string
}

export const NoteDetailsContentSkeleton: React.FC<NoteDetailsContentProps> =
  memo((props: NoteDetailsContentProps) => {
    const { className } = props

    return (
      <div className={classNames(cls.NoteDetailsContent, {}, [className])}>
        <VStack
          gap={20}
          className={classNames(cls.NotesDetails, {}, [className])}
        >
          <Skeleton width={'600px'} />

          <HStack gap={8} isWrap>
            {Array(3).fill('').map(() => (
              <Skeleton
                key={generateKey()}
                width={'150px'}
                height={'40px'}
              />
            ))}
          </HStack>

          <Skeleton
            width={'500px'}
            height={'200px'}
          />

          <Skeleton width={'400px'} />

          <Skeleton width={'200px'} height={'40px'} radius={'50px'} />
        </VStack>
      </div>
    )
  })
