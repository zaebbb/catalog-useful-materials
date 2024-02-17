import { NoteSearch } from '@features/NoteSearch'
import { UserNotesList as UserNotesListApi } from '@features/UserNotesList'
import { classNames } from '@lib/helpers/classNames'
import React, { memo } from 'react'
import cls from './UserNotesList.module.scss'

interface UserNotesListProps {
  className?: string
}

export const UserNotesList: React.FC<UserNotesListProps> = memo((props: UserNotesListProps) => {
  const { className } = props

  return (
    <div className={classNames(cls.UserNotesList, {}, [className])}>
      <NoteSearch />
      <UserNotesListApi />
    </div>
  )
})
