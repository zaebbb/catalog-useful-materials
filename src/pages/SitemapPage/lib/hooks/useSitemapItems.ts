import {
  getRouteAbout,
  getRouteMain,
  getRoutePrivacyPolicy, getRouteSitemap,
} from '@lib/router'
import { useTranslation } from 'react-i18next'

export interface LinkItem {
  content: string
  href: string
}

export interface LinksBlock {
  title: string
  links: LinkItem[]
}

export interface UseSitemapItemsResult {
  infoBlock: LinksBlock
}

export const useSitemapItems = (): UseSitemapItemsResult => {
  const { t } = useTranslation('sitemap-page')

  const infoBlock: LinksBlock = {
    title: t('info-title'),
    links: [
      { content: t('info-route-main'), href: getRouteMain() },
      { content: t('info-route-about'), href: getRouteAbout() },
      { content: t('info-route-privacy'), href: getRoutePrivacyPolicy() },
      { content: t('info-route-sitemap'), href: getRouteSitemap() },
    ],
  }

  return {
    infoBlock,
  }
}
