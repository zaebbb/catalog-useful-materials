import { classNames } from '@lib/helpers/classNames'
import { generateKey } from '@lib/helpers/generateKey'
import { Card, CardSkeleton } from '@ui-kit/Card'
import { VStack } from '@ui-kit/Stack'
import { Text } from '@ui-kit/Text'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { type NotesTypesListElement } from '../../model/types/NotesTypesSchema'
import cls from './NotesTypesList.module.scss'

interface NotesTypesListProps {
  className?: string
  notesTypes?: NotesTypesListElement[]
  isLoading?: boolean
  isAccess?: boolean
}

export const NotesTypesList: React.FC<NotesTypesListProps> = memo((props: NotesTypesListProps) => {
  const {
    className,
    notesTypes,
    isAccess,
    isLoading,
  } = props
  const { t } = useTranslation('notes-types-page')

  return (
    <VStack
      isMax
      gap={20}
      isWrap
      className={classNames(cls.NotesTypesList, {}, [className])}
    >
      <div className={cls.Cards}>
        {isLoading && Array(10).fill('').map(() => (
          <CardSkeleton
            key={generateKey()}
            className={cls.Card}
          />
        ))}

        {Boolean(!notesTypes?.length && !isLoading) && (
          <Text>{t('notes-types-list-not-found')}</Text>
        )}

        {!isLoading && notesTypes?.map(noteType => (
          <Card
            key={generateKey()}
            title={noteType.name}
            createdAt={noteType.createdAt}
            editLink={noteType.code}
            isAccess={isAccess}
            className={cls.Card}
            isDelete={false}
          />
        ))}
      </div>
    </VStack>
  )
})
