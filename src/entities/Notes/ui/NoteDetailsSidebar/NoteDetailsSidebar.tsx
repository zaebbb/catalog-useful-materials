import { getNoteDetailsSelector } from '@entities/Notes/model/selectors/NoteDetailsSelectors'
import { classNames } from '@lib/helpers/classNames'
import { AvatarUser } from '@ui-kit/Avatar'
import { Badge } from '@ui-kit/Badge'
import { HStack, VStack } from '@ui-kit/Stack'
import { Tab } from '@ui-kit/Tabs'
import { Span, Text } from '@ui-kit/Text'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import cls from './NoteDetailsSidebar.module.scss'

interface NoteDetailsSidebarProps {
  className?: string
}

export const NoteDetailsSidebar: React.FC<NoteDetailsSidebarProps> =
  memo((props: NoteDetailsSidebarProps) => {
    const { className } = props
    const { t } = useTranslation('note-view-page')
    const note = useSelector(getNoteDetailsSelector)

    return (
      <VStack
        gap={16}
        align={'flex-start'}
        className={classNames(cls.NoteDetailsSidebar, {}, [className])}
      >
        {note?.draft && (
          <Badge
            color={'neutral'}
            variant={'30'}
          >
            {t('details-view-badge')}
          </Badge>
        )}

        <AvatarUser
          src={note?.user.avatar}
          username={note?.user.username}
          content={note?.user.email}
          size={'small'}
          textAlign={'right'}
        />

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

        <HStack gap={8}>
          {note?.tags.map(tag => (
            <Tab tabKey={tag.code} key={tag.code}>
              {tag.name}
            </Tab>
          ))}
        </HStack>
      </VStack>
    )
  })
