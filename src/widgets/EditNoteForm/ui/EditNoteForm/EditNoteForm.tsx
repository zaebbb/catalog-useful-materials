import { CategoryReducer } from '@entities/Category'
import { NoteBaseFields, NoteBaseFieldsReducer } from '@entities/Notes'
import { NotesTypesReducer, useNotesTypes } from '@entities/NotesTypes'
import { NotesViewsReducer } from '@entities/NotesViews'
import { TagReducer } from '@entities/Tag'
import { DynamicReducerLoader, type ReducerList } from '@lib/components/DynamicReducerLoader'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { VStack } from '@ui-kit/Stack'
import React, { memo } from 'react'
import { RenderPatternEditNote } from '../../lib/components/RenderPatternEditNote'
import { FetchEditNoteData } from '../../model/services/FetchEditNoteData'

interface EditNoteFormProps {
  className?: string
  code?: string
}

const reducers: ReducerList = {
  notesTypes: NotesTypesReducer,
  notesViews: NotesViewsReducer,
  noteBaseField: NoteBaseFieldsReducer,
  category: CategoryReducer,
  tag: TagReducer,
}

export const EditNoteForm: React.FC<EditNoteFormProps> = memo((props: EditNoteFormProps) => {
  const {
    className,
    code,
  } = props
  const dispatch = useAppDispatch()
  const {
    currentType,
  } = useNotesTypes()

  React.useEffect(() => {
    if (code) {
      dispatch(FetchEditNoteData(code))
    }
  }, [code, dispatch])

  return (
    <DynamicReducerLoader reducers={reducers}>
      <VStack
        className={className}
        gap={24}
        isMax
      >
        <NoteBaseFields />

        {currentType && (
          <RenderPatternEditNote
            current={currentType}
          />
        )}
      </VStack>
    </DynamicReducerLoader>
  )
})
