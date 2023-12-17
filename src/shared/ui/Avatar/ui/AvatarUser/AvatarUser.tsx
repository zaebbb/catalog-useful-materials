import { Avatar, type AvatarProps } from '@ui-kit/Avatar/ui/Avatar/Avatar'
import { VStack } from '@ui-kit/Stack'
import { Flex } from '@ui-kit/Stack/ui/Flex/Flex'
import { Span, Text } from '@ui-kit/Text'
import { TitleSmall } from '@ui-kit/Title'
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
  /** Username пользователя */
  username?: string
  /** Краткая информация о пользователе */
  content?: string
  /** Положение текста относительно изображения */
  textAlign?: AvatarUserAlign
}

/**
 * @description Компонент описывающий подключение компонента Avatar
 * @description Компонент дополняющий Avatar информацией о пользователе
 * @param {AvatarUserProps} props - Пропсы типа AvatarUserProps
 * */
export const AvatarUser: React.FC<AvatarUserProps> = memo((props: AvatarUserProps) => {
  const {
    username,
    content,
    size = 'medium',
    textAlign = 'left',
    ...other
  } = props

  const isLeft = textAlign === 'left'
  const avatar = <Avatar {...other} size={size} />

  if (size === 'small') {
    return (
      <Flex gap={8} direction={isLeft ? 'row-reverse' : 'row'} align={'center'}>
        {avatar}
        {content && <Text type={'medium'}>{content}</Text>}
      </Flex>
    )
  }

  if (size === 'medium') {
    return (
      <Flex gap={12} direction={isLeft ? 'row-reverse' : 'row'} align={'center'}>
        {avatar}
        <VStack gap={0}>
          {username && <Text align={isLeft ? 'right' : 'left'}>{username}</Text>}
          {content && (
            <Text align={isLeft ? 'right' : 'left'}>
              <Span content={content} color={'gradient'}/>
            </Text>
          )}
        </VStack>
      </Flex>
    )
  }

  return (
    <Flex gap={12} direction={isLeft ? 'row-reverse' : 'row'} align={'center'}>
      {avatar}
      <VStack gap={4}>
        {username && <TitleSmall align={isLeft ? 'right' : 'left'}>{username}</TitleSmall>}
        {content && (
          <Text align={isLeft ? 'right' : 'left'} type={'small'}>
            <Span content={content} color={'gradient'}/>
          </Text>
        )}
      </VStack>
    </Flex>
  )
})
