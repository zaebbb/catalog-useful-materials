import { classNames } from '@lib/helpers/classNames'
import { generateKey } from '@lib/helpers/generateKey'
import { getRouteEditTag } from '@lib/router'
import { Card, CardSkeleton } from '@ui-kit/Card'
import { VStack } from '@ui-kit/Stack'
import { Text } from '@ui-kit/Text'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { type TagsListElement } from '../../model/types/TagSchema'
import cls from './TagsList.module.scss'

interface NotesListProps {
  className?: string
  tags?: TagsListElement[]
  isLoading?: boolean
  onDelete?: (id: number | string) => void
  isAccess?: boolean
}

export const TagsList: React.FC<NotesListProps> = memo((props: NotesListProps) => {
  const {
    className,
    tags,
    isLoading = false,
    onDelete,
    isAccess = false,
  } = props
  const { t } = useTranslation('tags-page')

  const onDeleteHandler = React.useCallback((id: number | string) => {
    onDelete?.(id)
  }, [onDelete])

  return (
    <VStack
      isMax
      gap={20}
      className={classNames(cls.TagsList, {}, [className])}
      isWrap
    >
      <div className={cls.Cards}>
        {isLoading && Array(10).fill('').map(() => (
          <CardSkeleton
            key={generateKey()}
            className={cls.Card}
          />
        ))}

        {Boolean(!tags?.length && !isLoading) && (
          <Text>{t('tags-not-found')}</Text>
        )}

        {!isLoading && tags?.map(tag => (
          <Card
            key={tag.code}
            description={tag.name}
            createdAt={tag.createdAt}
            editLink={getRouteEditTag(tag.code)}
            isAccess={isAccess}
            className={cls.Card}
            onDelete={onDeleteHandler}
            id={tag.id}
            deleteContent={t('accept-delete-content')}
          />
        ))}
      </div>
    </VStack>
  )
})
