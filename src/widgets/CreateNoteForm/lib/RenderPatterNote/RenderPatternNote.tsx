import { NoteBaseFields } from '@entities/Notes'
import { NotesTypesCodeList } from '@entities/NotesTypes'
import { CreateNotePatternArticle } from '@features/CreateNotePatternArticle'
import { CreateNotePatternCode } from '@features/CreateNotePatternCode'
import { CreateNotePatternIssue } from '@features/CreateNotePatternIssue'
import { VStack } from '@ui-kit/Stack'
import React, { memo } from 'react'

interface RenderPatternNoteProps {
  current?: SelectFieldOption<NotesTypesCodeList>
}

export const RenderPatternNote: React.FC<RenderPatternNoteProps> =
  memo((props: RenderPatternNoteProps) => {
    const {
      current,
    } = props

    const renderForm = React.useMemo(() => {
      switch (current?.code) {
        case NotesTypesCodeList.ARTICLE:
          return <CreateNotePatternArticle />
        case NotesTypesCodeList.CODE:
          return <CreateNotePatternCode />
        case NotesTypesCodeList.ISSUE:
          return <CreateNotePatternIssue />
        default:
          return null
      }
    }, [current?.code])

    return (
      <VStack
        gap={24}
        isMax
      >
        {renderForm && (
          <NoteBaseFields
            selectTypeCode={current?.code}
          />
        )}
        {renderForm}
      </VStack>
    )
  })
