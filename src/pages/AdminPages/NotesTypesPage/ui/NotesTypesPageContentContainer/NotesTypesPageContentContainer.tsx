import { NotesTypesListApi } from '@features/NotesTypesList'
import { getRouteAdminCreateNoteType } from '@lib/router'
import { AppLink } from '@ui-kit/AppLink'
import { Button } from '@ui-kit/Button'
import { VStack } from '@ui-kit/Stack'
import { TitleLarge } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

export const NotesTypesPageContentContainer: React.FC = memo(() => {
  const { t } = useTranslation('notes-types-page')

  return (
    <VStack gap={24}>
      <TitleLarge>
        {t('title')}
      </TitleLarge>

      <VStack gap={20}>
        <AppLink to={getRouteAdminCreateNoteType()}>
          <Button size={'large'} theme={'gradient'}>
            {t('button-create')}
          </Button>
        </AppLink>

        <NotesTypesListApi />
      </VStack>
    </VStack>
  )
})
