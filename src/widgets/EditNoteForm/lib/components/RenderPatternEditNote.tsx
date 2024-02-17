import { NotesTypesCodeList } from '@entities/NotesTypes'
import { NotePatternArticleForm } from '@features/NotePatternArticle'
import { NotePatternBookForm } from '@features/NotePatternBook'
import { NotePatternCodeForm } from '@features/NotePatternCode'
import { NotePatternCourseForm } from '@features/NotePatternCourse'
import { NotePatternCustomForm } from '@features/NotePatternCustom'
import { NotePatternIssueForm } from '@features/NotePatternIssue'
import { NotePatternLayoutForm } from '@features/NotePatternLayout'
import { NotePatternServiceForm } from '@features/NotePatternService'
import { NotePatternTechnologyForm } from '@features/NotePatternTechnology'
import { NotePatternVideoForm } from '@features/NotePatternVideo'
import React, { memo } from 'react'

interface RenderPatternEditNoteProps {
  current: SelectFieldOption<NotesTypesCodeList>
}

export const RenderPatternEditNote: React.FC<RenderPatternEditNoteProps> =
  memo((props: RenderPatternEditNoteProps) => {
    const {
      current,
    } = props

    return React.useMemo(() => {
      switch (current?.code) {
        case NotesTypesCodeList.ARTICLE:
          return <NotePatternArticleForm mode={'edit'} />
        case NotesTypesCodeList.BOOK:
          return <NotePatternBookForm mode={'edit'} />
        case NotesTypesCodeList.VIDEO:
          return <NotePatternVideoForm mode={'edit'} />
        case NotesTypesCodeList.CODE:
          return <NotePatternCodeForm mode={'edit'} />
        case NotesTypesCodeList.SERVICE:
          return <NotePatternServiceForm mode={'edit'} />
        case NotesTypesCodeList.COURSE:
          return <NotePatternCourseForm mode={'edit'} />
        case NotesTypesCodeList.TECHNOLOGY:
          return <NotePatternTechnologyForm mode={'edit'} />
        case NotesTypesCodeList.ISSUE:
          return <NotePatternIssueForm mode={'edit'} />
        case NotesTypesCodeList.LAYOUT:
          return <NotePatternLayoutForm mode={'edit'} />
        default:
          return <NotePatternCustomForm mode={'edit'} />
      }
    }, [current?.code])
  })
