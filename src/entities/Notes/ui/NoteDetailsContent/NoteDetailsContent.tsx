import { classNames } from '@lib/helpers/classNames'
import { stringToHTML } from '@lib/helpers/stringToHTML'
import { HStack, VStack } from '@ui-kit/Stack'
import { Tab } from '@ui-kit/Tabs'
import { Text } from '@ui-kit/Text'
import { TitleMedium } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { getNoteDetailsSelector } from '../../model/selectors/NoteDetailsSelectors'
import {
  RenderArticleDetails,
} from '../DetailsPatterns/RenderArticleDetails/RenderArticleDetails'
import {
  RenderBookDetails,
} from '../DetailsPatterns/RenderBookDetails/RenderBookDetails'
import {
  RenderCodeDetails,
} from '../DetailsPatterns/RenderCodeDetails/RenderCodeDetails'
import {
  RenderCourseDetails,
} from '../DetailsPatterns/RenderCourseDetails/RenderCourseDetails'
import {
  RenderIssueDetails,
} from '../DetailsPatterns/RenderIssueDetails/RenderIssueDetails'
import {
  RenderLayoutDetails,
} from '../DetailsPatterns/RenderLayoutDetails/RenderLayoutDetails'
import {
  RenderServiceDetails,
} from '../DetailsPatterns/RenderServiceDetails/RenderServiceDetails'
import {
  RenderTechnologyDetails,
} from '../DetailsPatterns/RenderTechnologyDetails/RenderTechnologyDetails'
import {
  RenderVideoDetails,
} from '../DetailsPatterns/RenderVideoDetails/RenderVideoDetails'
import cls from './NoteDetailsContent.module.scss'

interface NoteDetailsContentProps {
  className?: string
}

export const NoteDetailsContent: React.FC<NoteDetailsContentProps> =
  memo((props: NoteDetailsContentProps) => {
    const { className } = props
    const note = useSelector(getNoteDetailsSelector)

    return (
      <div className={classNames(cls.NoteDetailsContent, {}, [className])}>
        <VStack
          gap={20}
          className={classNames(cls.NotesDetails, {}, [className])}
        >
          <TitleMedium>
            {note?.title}
          </TitleMedium>

          <HStack gap={8}>
            {note?.tags.map(tag => (
              <Tab tabKey={tag.code} key={tag.code}>
                {tag.name}
              </Tab>
            ))}
          </HStack>

          <Text type={'large'}>
            {stringToHTML(note?.description ?? '')}
          </Text>

          {note?.patternArticle && <RenderArticleDetails pattern={note.patternArticle} />}
          {note?.patternCode && <RenderCodeDetails pattern={note.patternCode} />}
          {note?.patternIssue && <RenderIssueDetails pattern={note.patternIssue} />}
          {note?.patternLayout && <RenderLayoutDetails pattern={note.patternLayout} />}
          {note?.patternService && <RenderServiceDetails pattern={note.patternService} />}
          {note?.patternBook && <RenderBookDetails pattern={note.patternBook} />}
          {note?.patternVideo && <RenderVideoDetails pattern={note.patternVideo} />}
          {note?.patternTechnology && <RenderTechnologyDetails pattern={note.patternTechnology} />}
          {note?.patternCourse && <RenderCourseDetails pattern={note.patternCourse} />}
        </VStack>
      </div>
    )
  })
