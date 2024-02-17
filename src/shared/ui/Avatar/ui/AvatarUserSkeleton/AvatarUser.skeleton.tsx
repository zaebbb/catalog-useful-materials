import { AvatarSkeleton, type AvatarProps } from '@ui-kit/Avatar/ui/AvatarSkeleton/Avatar.skeleton'
import { Skeleton } from '@ui-kit/Skeleton'
import { VStack } from '@ui-kit/Stack'
import { Flex } from '@ui-kit/Stack/ui/Flex/Flex'
import React, { memo } from 'react'

/** @module AvatarUser */

/**
 * @type AvatarUserAlign
 * @description Описывает положение текста по направлению к изображению
 * @description left - Контент располагается слева от Avatar
 * @description right - Контент располагается справа от Avatar
 * */
type AvatarUserAlign = 'left' | 'right'

/**
 * @interface AvatarUserProps
 * @description Описывает передаваемые параметры в компонент
 * @description Наследует свойства типа AvatarProps
 * */
interface AvatarUserProps extends AvatarProps {
  /** Положение текста относительно изображения */
  textAlign?: AvatarUserAlign
}

/**
 * @description Компонент описывающий подключение компонента Avatar
 * @description Компонент дополняющий Avatar информацией о пользователе
 * @param {AvatarUserProps} props - Пропсы типа AvatarUserProps
 * */
export const AvatarUserSkeleton: React.FC<AvatarUserProps> = memo((props: AvatarUserProps) => {
  const {
    size = 'medium',
    textAlign = 'left',
  } = props

  const isLeft = textAlign === 'left'
  const avatar = <AvatarSkeleton size={size} />

  if (size === 'small') {
    return (
      <Flex gap={8} direction={isLeft ? 'row-reverse' : 'row'} align={'center'}>
        {avatar}
        <Skeleton isMaxWidth={false} width={'150px'} height={'20px'} />
      </Flex>
    )
  }

  if (size === 'medium') {
    return (
      <Flex gap={12} direction={isLeft ? 'row-reverse' : 'row'} align={'center'}>
        {avatar}
        <VStack gap={8} align={isLeft ? 'flex-end' : 'flex-start'}>
          <Skeleton isMaxWidth={false} height={'25px'} width={'200px'} />
          <Skeleton isMaxWidth={false} height={'15px'} width={'150px'} />
        </VStack>
      </Flex>
    )
  }

  return (
    <Flex gap={12} direction={isLeft ? 'row-reverse' : 'row'} align={'center'}>
      {avatar}
      <VStack gap={4} align={isLeft ? 'flex-end' : 'flex-start'}>
        <Skeleton isMaxWidth={false} height={'25px'} width={'200px'} />
        <Skeleton isMaxWidth={false} height={'15px'} width={'150px'} />
      </VStack>
    </Flex>
  )
})
