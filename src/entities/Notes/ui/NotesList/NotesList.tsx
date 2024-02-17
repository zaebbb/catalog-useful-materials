import { type UserNotesListElement } from '@features/UserNotesList/model/types/NotesListSchema'
import { classNames } from '@lib/helpers/classNames'
import { generateKey } from '@lib/helpers/generateKey'
import { textSlice } from '@lib/helpers/textSlice'
import { getRouteEditNote, getRouteViewNote } from '@lib/router'
import { Card, CardSkeleton } from '@ui-kit/Card'
import { VStack } from '@ui-kit/Stack'
import { Text } from '@ui-kit/Text'
import { TitleLarge } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
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
  const [
    notesState,
    setNotes,
  ] = React.useState<UserNotesListElement[]>()

  React.useEffect(() => {
    setNotes(notes)
  }, [notes])

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

        {(!notesState?.length && !isLoading) && (
          <Text>{t('notes-not-found')}</Text>
        )}

        {!isLoading && notesState?.map(note => (
          <Card
            key={note.id}
            title={note.title}
            description={textSlice(note.description, 10)}
            createdAt={note.createdAt}
            category={note.category.name}
            viewLink={getRouteViewNote(note.code)}
            className={cls.Card}
            isAccess
            isDelete={false}
            editLink={getRouteEditNote(note.code)}
          />
        ))}
      </div>
    </VStack>
  )
})
