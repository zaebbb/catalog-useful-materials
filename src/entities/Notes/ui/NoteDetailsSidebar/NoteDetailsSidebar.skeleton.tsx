import { classNames } from '@lib/helpers/classNames'
import { AvatarUserSkeleton } from '@ui-kit/Avatar'
import { Skeleton } from '@ui-kit/Skeleton'
import { VStack } from '@ui-kit/Stack'
import React, { memo } from 'react'

import cls from './NoteDetailsSidebar.module.scss'

interface NoteDetailsSidebarProps {
  className?: string
}

export const NoteDetailsSidebarSkeleton: React.FC<NoteDetailsSidebarProps> =
  memo((props: NoteDetailsSidebarProps) => {
    const { className } = props

    return (
      <VStack
        gap={16}
        align={'flex-start'}
        className={classNames(cls.NoteDetailsSidebar, {}, [className])}
      >
        <AvatarUserSkeleton
          size={'small'}
          textAlign={'right'}
        />

        <Skeleton width={'200px'} height={'30px'} />
        <Skeleton width={'200px'} height={'30px'} />
      </VStack>
    )
  })
