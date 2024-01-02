import { NoteBaseFields } from '@entities/Notes'
import { NotesTypesCodeList } from '@entities/NotesTypes'
import { CreateNotePatternArticle } from '@features/CreateNotePatternArticle'
import { CreateNotePatternBook } from '@features/CreateNotePatternBook'
import { CreateNotePatternCode } from '@features/CreateNotePatternCode'
import { CreateNotePatternCourse } from '@features/CreateNotePatternCourse'
import { CreateNotePatternIssue } from '@features/CreateNotePatternIssue'
import { CreateNotePatternLayout } from '@features/CreateNotePatternLayout'
import { CreateNotePatternService } from '@features/CreateNotePatternService'
import { CreateNotePatternTechnology } from '@features/CreateNotePatternTechnology'
import { CreateNotePatternVideo } from '@features/CreateNotePatternVideo'
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

    React.useEffect(() => {
      console.log(current)
    }, [current])

    const renderForm = React.useMemo(() => {
      switch (current?.code) {
        case NotesTypesCodeList.ARTICLE:
          return <CreateNotePatternArticle />
        case NotesTypesCodeList.CODE:
          return <CreateNotePatternCode />
        case NotesTypesCodeList.ISSUE:
          return <CreateNotePatternIssue />
        case NotesTypesCodeList.LAYOUT:
          return <CreateNotePatternLayout />
        case NotesTypesCodeList.SERVICE:
          return <CreateNotePatternService />
        case NotesTypesCodeList.BOOK:
          return <CreateNotePatternBook />
        case NotesTypesCodeList.TECHNOLOGY:
          return <CreateNotePatternTechnology />
        case NotesTypesCodeList.COURSE:
          return <CreateNotePatternCourse />
        case NotesTypesCodeList.VIDEO:
          return <CreateNotePatternVideo />
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
