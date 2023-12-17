import { classNames } from '@lib/helpers/classNames'
import { stringToHTML } from '@lib/helpers/stringToHTML'
import { VStack } from '@ui-kit/Stack'
import { Text } from '@ui-kit/Text'
import { TitleMedium } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { getNoteDetailsSelector } from '../../model/selectors/NoteDetailsSelectors'
import {
  RenderArticleDetails,
} from '../DetailsPatterns/RenderArticleDetails/RenderArticleDetails'
import {
  RenderCodeDetails,
} from '../DetailsPatterns/RenderCodeDetails/RenderCodeDetails'
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

          <Text type={'large'}>
            {stringToHTML(note?.description ?? '')}
          </Text>

          {note?.patternArticle && <RenderArticleDetails pattern={note.patternArticle} />}
          {note?.patternCode && <RenderCodeDetails pattern={note.patternCode} />}
        </VStack>
      </div>
    )
  })
