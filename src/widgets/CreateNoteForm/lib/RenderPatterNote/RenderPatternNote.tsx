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

interface RenderPatternNoteProps {
  current?: SelectFieldOption<NotesTypesCodeList>
}

export const RenderPatternNote: React.FC<RenderPatternNoteProps> =
  memo((props: RenderPatternNoteProps) => {
    const {
      current,
    } = props

    if (current) {
      switch (current?.code) {
        case NotesTypesCodeList.ARTICLE:
          return <NotePatternArticleForm mode={'create'} />
        case NotesTypesCodeList.CODE:
          return <NotePatternCodeForm mode={'create'} />
        case NotesTypesCodeList.ISSUE:
          return <NotePatternIssueForm mode={'create'} />
        case NotesTypesCodeList.LAYOUT:
          return <NotePatternLayoutForm mode={'create'} />
        case NotesTypesCodeList.SERVICE:
          return <NotePatternServiceForm mode={'create'} />
        case NotesTypesCodeList.BOOK:
          return <NotePatternBookForm mode={'create'} />
        case NotesTypesCodeList.TECHNOLOGY:
          return <NotePatternTechnologyForm mode={'create'} />
        case NotesTypesCodeList.COURSE:
          return <NotePatternCourseForm mode={'create'} />
        case NotesTypesCodeList.VIDEO:
          return <NotePatternVideoForm mode={'create'} />
        default:
          return <NotePatternCustomForm mode={'create'} />
      }
    }

    return null
  })
