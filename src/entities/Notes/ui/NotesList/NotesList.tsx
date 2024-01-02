import { classNames } from '@lib/helpers/classNames'
import { generateKey } from '@lib/helpers/generateKey'
import { getRouteViewNote } from '@lib/router'
import { Card, CardSkeleton } from '@ui-kit/Card'
import { VStack } from '@ui-kit/Stack'
import { Text } from '@ui-kit/Text'
import { TitleLarge } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { type UserNotesListElement } from '../../model/types/NotesListSchema'
import cls from './NotesList.module.scss'

interface NotesListProps {
  className?: string
  title: React.ReactNode
  notes?: UserNotesListElement[]
  isLoading?: boolean
}

export const NotesList: React.FC<NotesListProps> = memo((props: NotesListProps) => {
  const {
    className,
    title,
    notes,
    isLoading = false,
  } = props
  const { t } = useTranslation('notes-view-page')

  return (
    <VStack
      isMax
      gap={20}
      className={classNames(cls.NotesList, {}, [className])}
    >
      <TitleLarge>{title}</TitleLarge>

      <div className={cls.Cards}>
        {isLoading && Array(10).fill('').map(() => (
          <CardSkeleton
            key={generateKey()}
            className={cls.Card}
          />
        ))}

        {(!notes?.length && !isLoading) && (
          <Text>{t('notes-not-found')}</Text>
        )}

        {!isLoading && notes?.map(note => (
          <Card
            key={note.code}
            title={note.title}
            description={note.description}
            createdAt={note.createdAt}
            category={note.category.name}
            viewLink={getRouteViewNote(note.code)}
            className={cls.Card}
          />
        ))}
      </div>
    </VStack>
  )
})
