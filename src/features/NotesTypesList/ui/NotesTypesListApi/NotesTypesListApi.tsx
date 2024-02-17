import { NotesTypesList } from '@entities/NotesTypes'
import React, { memo } from 'react'
import { useNotesTypesList } from '../../api/notesTypesListApi'

interface CategoriesListProps {
  className?: string
}

export const NotesTypesListApi: React.FC<CategoriesListProps> =
  memo((props: CategoriesListProps) => {
    const { className } = props

    const {
      isLoading,
      data: notesTypes,
    } = useNotesTypesList()

    return (
      <NotesTypesList
        notesTypes={notesTypes?.success}
        className={className}
        isLoading={isLoading}
        isAccess
      />
    )
  })
