import { classNames } from '@lib/helpers/classNames'
import { useFormatDate } from '@lib/hooks/useFormatDate'
import { getRouteEditNote } from '@lib/router'
import { AvatarUser } from '@ui-kit/Avatar'
import { Badge } from '@ui-kit/Badge'
import { ElementEdit } from '@ui-kit/ElementEdit'
import { VStack } from '@ui-kit/Stack'
import { Span, Text } from '@ui-kit/Text'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  getNoteDetailsSelector,
  isCanEditNote,
} from '../../model/selectors/NoteDetailsSelectors'
import cls from './NoteDetailsSidebar.module.scss'

interface NoteDetailsSidebarProps {
  className?: string
  code?: string
}

export const NoteDetailsSidebar: React.FC<NoteDetailsSidebarProps> =
  memo((props: NoteDetailsSidebarProps) => {
    const {
      className,
      code,
    } = props
    const { t } = useTranslation('note-view-page')
    const note = useSelector(getNoteDetailsSelector)
    const isEdit = useSelector(isCanEditNote)
    const date = useFormatDate(note?.createdAt)

    return (
      <VStack
        gap={16}
        align={'flex-start'}
        className={classNames(cls.NoteDetailsSidebar, {}, [className])}
      >
        <AvatarUser
          src={note?.user.avatar}
          username={note?.user.username}
          content={note?.user.email}
          size={'small'}
          textAlign={'right'}
        />

        {isEdit && (
          <ElementEdit
            linkEdit={getRouteEditNote(code ?? '')}
          />
        )}

        {note?.draft && (
          <Badge
            color={'neutral'}
            variant={'30'}
          >
            {t('details-view-badge')}
          </Badge>
        )}

        <Text
          type={'large'}
        >
          {t('details-view-category')}
          {' '}
          <Span
            color={'gradient'}
            content={note?.category.name}
          />
        </Text>

        <Text
          type={'large'}
        >
          {t('details-view-date-created')}
          {' '}
          <Span
            color={'gradient'}
            content={date}
          />
        </Text>
      </VStack>
    )
  })
