import NotesImage from '@assets/image/notes-image.png'
import { useAuth } from '@entities/User'
import { getRouteLogin, getRouteRegister } from '@lib/router'
import { AppImage } from '@ui-kit/AppImage'
import { AppLink } from '@ui-kit/AppLink'
import { Button } from '@ui-kit/Button'
import { Page } from '@ui-kit/Page'
import { HStack, VStack } from '@ui-kit/Stack'
import { Text } from '@ui-kit/Text'
import { TitleLarge } from '@ui-kit/Title'
import React from 'react'
import { useTranslation } from 'react-i18next'
import cls from './MainPage.module.scss'

const MainPage: React.FC = React.memo(() => {
  const { t } = useTranslation('main-page')
  const {
    isMounted,
  } = useAuth()

  return (
    <Page title={t('page-title')}>
      <HStack justify={'space-between'} gap={0}>
        <VStack gap={20}>
          <TitleLarge>
            {t('title')}
          </TitleLarge>
          <VStack gap={12}>
            <Text type={'large'} width={'600px'}>
              {t('text')}
            </Text>
            <Text type={'large'} width={'600px'}>
              {t('text-2')}
            </Text>
            <Text type={'large'} width={'600px'}>
              {t('text-3')}
            </Text>
          </VStack>
          {!isMounted && (
            <HStack gap={12}>
              <AppLink to={getRouteRegister()}>
                <Button>
                  {t('register-button')}
                </Button>
              </AppLink>
              <AppLink to={getRouteLogin()}>
                <Button fill={'border'}>
                  {t('auth-button')}
                </Button>
              </AppLink>
            </HStack>
          )}
        </VStack>

        <AppImage
          isMax
          src={NotesImage}
          className={cls.Image}
        />
      </HStack>
    </Page>
  )
})

export default MainPage
