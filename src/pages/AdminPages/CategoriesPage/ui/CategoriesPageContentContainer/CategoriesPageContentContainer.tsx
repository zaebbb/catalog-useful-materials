import { CategoriesListApi } from '@features/CategoriesList'
import { getRouteCreateCategory } from '@lib/router'
import { AppLink } from '@ui-kit/AppLink'
import { Button } from '@ui-kit/Button'
import { VStack } from '@ui-kit/Stack'
import { TitleLarge } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

export const CategoriesPageContentContainer: React.FC = memo(() => {
  const { t } = useTranslation('categories-page')

  return (
    <VStack gap={24}>
      <TitleLarge>
        {t('title')}
      </TitleLarge>

      <VStack gap={20}>
        <AppLink to={getRouteCreateCategory()}>
          <Button size={'large'} theme={'gradient'}>
            {t('button-create')}
          </Button>
        </AppLink>

        <CategoriesListApi />
      </VStack>
    </VStack>
  )
})
