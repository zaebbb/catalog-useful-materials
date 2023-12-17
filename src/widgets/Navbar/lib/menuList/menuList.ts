import { getRouteLogin, getRouteMain } from '@lib/router'
import { type renderItemOptions } from '../helpers/renderItems'

export const exploreList: renderItemOptions[] = [
  { link: getRouteMain(), label: 'Explore 1' },
  { link: getRouteLogin(), label: 'Explore 2' },
  { link: '/sdfsdfsdf', label: 'Explore 3' },
  { link: '/sdfsdfsdsdfdf', label: 'Explore 4' },
  { link: '/sdfdfsdfsdfsdf', label: 'Explore 5 long text' },
]
