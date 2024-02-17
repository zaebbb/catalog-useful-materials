import { useAuth } from '@entities/User'
import {
  getRouteAbout,
  getRouteLogin,
  getRoutePrivacyPolicy,
  getRouteProfile,
  getRouteRegister, getRouteUserViewNotes,
} from '@lib/router'
import { useTranslation } from 'react-i18next'
import { type FooterBlock, type UseFooterItemsResult } from '../types/FooterType'

export const useFooterItems = (): UseFooterItemsResult => {
  const { t } = useTranslation('footer')
  const { isMounted } = useAuth()

  const siteBlock: FooterBlock = {
    title: t('site-title'),
    items: [
      { content: t('site-content-1'), link: getRouteAbout() },
      { content: t('site-content-2'), link: getRoutePrivacyPolicy() },
    ],
  }

  const userBlock: FooterBlock = {
    title: t('user-title'),
    items: isMounted ? [
      { content: t('user-content-1'), link: getRouteProfile() },
      { content: t('user-content-4'), link: getRouteUserViewNotes() },
    ] : [
      { content: t('user-content-2'), link: getRouteLogin() },
      { content: t('user-content-3'), link: getRouteRegister() },
    ],
  }

  return {
    siteBlock,
    userBlock,
  }
}
