import { CategoryReducer } from '@entities/Category'
import { NoteBaseFields, NoteBaseFieldsReducer } from '@entities/Notes'
import { NotesTypesReducer, useIsCustomNoteType, useNotesTypes } from '@entities/NotesTypes'
import { NotesViewsReducer } from '@entities/NotesViews'
import { TagReducer } from '@entities/Tag'
import { DynamicReducerLoader, type ReducerList } from '@lib/components/DynamicReducerLoader'
import { VStack } from '@ui-kit/Stack'
import React, { memo } from 'react'
import { RenderPatternNote } from '../../lib/RenderPatterNote/RenderPatternNote'

interface CreateNoteFormProps {
  className?: string
}

const reducers: ReducerList = {
  notesTypes: NotesTypesReducer,
  notesViews: NotesViewsReducer,
  noteBaseField: NoteBaseFieldsReducer,
  category: CategoryReducer,
  tag: TagReducer,
}

export const CreateNoteForm: React.FC<CreateNoteFormProps> = memo((props: CreateNoteFormProps) => {
  const { className } = props
  const {
    SelectNotesTypes,
    currentType,
  } = useNotesTypes()
  const isPattern = useIsCustomNoteType()

  return (
    <DynamicReducerLoader reducers={reducers}>
      <VStack
        gap={20}
        className={className}
      >
        <VStack
          gap={24}
          isMax
        >
          <SelectNotesTypes />

          <NoteBaseFields
            selectType={currentType}
            isPattern={isPattern}
          />

          <RenderPatternNote
            current={currentType}
          />
        </VStack>
      </VStack>
    </DynamicReducerLoader>
  )
})
