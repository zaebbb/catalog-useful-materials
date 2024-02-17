import { classNames } from '@lib/helpers/classNames'
import { stringToHTML } from '@lib/helpers/stringToHTML'
import { useFormatDate } from '@lib/hooks/useFormatDate'
import { AppLink } from '@ui-kit/AppLink'
import { AvatarUser } from '@ui-kit/Avatar'
import { Button } from '@ui-kit/Button'
import { ElementEdit } from '@ui-kit/ElementEdit'
import { HStack, VStack } from '@ui-kit/Stack'
import { Span, Text } from '@ui-kit/Text'
import { TitleRegular } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './Card.module.scss'

interface CardProps {
  className?: string
  title?: string
  description?: string
  category?: string
  username?: string
  userAvatar?: string
  createdAt?: string
  viewLink?: string
  isAccess?: boolean
  isDelete?: boolean
  editLink?: string
  onDelete?: (id: number | string) => void
  linkText?: string
  deleteContent?: string
  id?: number | string
  children?: React.ReactNode
}

export const Card: React.FC<CardProps> = memo((props: CardProps) => {
  const {
    className,
    title,
    category,
    createdAt,
    userAvatar,
    viewLink,
    linkText,
    description,
    username,
    onDelete,
    isAccess,
    editLink,
    deleteContent,
    id,
    isDelete = true,
    children,
  } = props

  const { t } = useTranslation('ui-kit')
  const createDate = useFormatDate(createdAt)

  return (
    <VStack gap={0} className={classNames(cls.Card, {}, [className])}>
      <VStack gap={8} className={cls.MainContent}>
        {title && (
          <TitleRegular>
            {title}
          </TitleRegular>
        )}

        {category && (
          <Text>
            {t('card-category')}
            {' '}
            <Span
              color={'gradient'}
              content={category}
            />
          </Text>
        )}

        {description && (
          <Text type={'small'}>
            {(stringToHTML(description))}
          </Text>
        )}

        {children && (
          <Text type={'small'}>
            {children}
          </Text>
        )}

        {username && (
          <AvatarUser
            src={userAvatar}
            content={username}
            size={'small'}
            textAlign={'right'}
          />
        )}

        {isAccess && (
          <ElementEdit
            linkEdit={editLink}
            onDelete={onDelete}
            deleteContent={deleteContent}
            isDelete={isDelete}
            id={id}
          />
        )}
      </VStack>

      {Boolean(createDate || viewLink) && (
        <HStack justify={'space-between'} align={'center'} className={cls.InfoContent}>
          {createDate && (
            <Text>
              <Span
                color={'gradient'}
                content={createDate}
              />
            </Text>
          )}

          {viewLink && (
            <AppLink to={viewLink}>
              <Button>
                {linkText ?? t('card-link')}
              </Button>
            </AppLink>
          )}
        </HStack>
      )}
    </VStack>
  )
})
