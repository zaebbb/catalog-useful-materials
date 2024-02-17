import { classNames } from '@lib/helpers/classNames'
import { generateKey } from '@lib/helpers/generateKey'
import { getRouteEditCategory } from '@lib/router'
import { Card, CardSkeleton } from '@ui-kit/Card'
import { VStack } from '@ui-kit/Stack'
import { Text } from '@ui-kit/Text'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { type CategoriesListElement } from '../../model/types/CategorySchema'
import cls from './CategoriesList.module.scss'

interface CategoriesListProps {
  className?: string
  categories?: CategoriesListElement[]
  isLoading?: boolean
  onDelete?: (id: number | string) => void
  isAccess?: boolean
}

export const CategoriesList: React.FC<CategoriesListProps> = memo((props: CategoriesListProps) => {
  const {
    className,
    categories,
    onDelete,
    isAccess,
    isLoading,
  } = props
  const { t } = useTranslation('categories-page')

  const onDeleteHandler = React.useCallback((id: number | string) => {
    onDelete?.(id)
  }, [onDelete])

  return (
    <VStack
      isMax
      gap={20}
      isWrap
      className={classNames(cls.CategoriesList, {}, [className])}
    >
      <div className={cls.Cards}>
        {isLoading && Array(10).fill('').map(() => (
          <CardSkeleton
            key={generateKey()}
            className={cls.Card}
          />
        ))}

        {Boolean(!categories?.length && !isLoading) && (
          <Text>{t('categories-not-found')}</Text>
        )}

        {!isLoading && categories?.map(category => (
          <Card
            key={category.code}
            title={category.name}
            createdAt={category.createdAt}
            editLink={getRouteEditCategory(category.code)}
            isAccess={isAccess}
            className={cls.Card}
            onDelete={onDeleteHandler}
            id={category?.id}
            deleteContent={t('accept-delete-content')}
          />
        ))}
      </div>
    </VStack>
  )
})
