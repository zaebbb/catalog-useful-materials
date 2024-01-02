import { classNames } from '@lib/helpers/classNames'
import { AvatarUserSkeleton } from '@ui-kit/Avatar'
import { Skeleton } from '@ui-kit/Skeleton'
import { HStack, VStack } from '@ui-kit/Stack'
import React, { memo } from 'react'
import cls from '../Card/Card.module.scss'

interface CardProps {
  className?: string
}

export const CardSkeleton: React.FC<CardProps> = memo((props: CardProps) => {
  const {
    className,
  } = props

  return (
    <VStack gap={0} className={classNames(cls.Card, {}, [className])}>
      <VStack gap={8} className={cls.MainContent}>
        <Skeleton height={'32px'} />

        <Skeleton height={'20px'} width={'80%'} />

        <Skeleton height={'50px'} width={'100%'} />

        <AvatarUserSkeleton
          size={'small'}
          textAlign={'right'}
        />
      </VStack>

      <HStack justify={'space-between'} align={'center'} className={cls.InfoContent}>
        <Skeleton width={'80px'} height={'20px'} />

        <Skeleton width={'150px'} height={'30px'} radius={'36px'} />
      </HStack>
    </VStack>
  )
})
