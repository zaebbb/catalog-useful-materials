import { type IconLibName } from '@lib/helpers/IconElement'
import { classNames } from '@lib/helpers/classNames'
import { generateKey } from '@lib/helpers/generateKey'
import {
  getRouteAdmin, getRouteAdminNotesTypes, getRouteAdminUsers, getRouteCategories,
  getRouteCreateNote,
  getRouteLogout,
  getRouteProfile, getRouteTags,
  getRouteUserViewNotes,
} from '@lib/router'
import { AppLink } from '@ui-kit/AppLink'
import { IconLib } from '@ui-kit/Icon'
import { HStack, VStack } from '@ui-kit/Stack'
import { Text } from '@ui-kit/Text'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './AdminMenu.module.scss'

interface AdminMenuItem {
  link: string
  content: string
  icon: IconLibName
}

interface AdminMenuProps {
  className?: string
}

export const AdminMenu: React.FC<AdminMenuProps> = memo((props: AdminMenuProps) => {
  const { className } = props
  const { t } = useTranslation('admin-sidebar')

  const AdminMenuItems = React.useMemo((): AdminMenuItem[] => ([
    {
      content: t('admin-sidebar-profile'),
      link: getRouteProfile(),
      icon: 'IconUser',
    },
    {
      content: t('admin-sidebar-admin-page'),
      link: getRouteAdmin(),
      icon: 'IconAdmin',
    },
    {
      content: t('admin-sidebar-tags'),
      link: getRouteTags(),
      icon: 'IconTag',
    },
    {
      content: t('admin-sidebar-categories'),
      link: getRouteCategories(),
      icon: 'IconCategoryOutline',
    },
    {
      content: t('admin-sidebar-users'),
      link: getRouteAdminUsers(),
      icon: 'IconUsers',
    },
    {
      content: t('admin-sidebar-notes-types'),
      link: getRouteAdminNotesTypes(),
      icon: 'IconNoteTypeOutline',
    },
    {
      content: t('admin-sidebar-create-note'),
      link: getRouteCreateNote(),
      icon: 'IconPlusOutline',
    },
    {
      content: t('admin-sidebar-user-notes'),
      link: getRouteUserViewNotes(),
      icon: 'IconDocumentOutline',
    },
    {
      content: t('admin-sidebar-logout'),
      link: getRouteLogout(),
      icon: 'IconExitOutline',
    },
  ]), [t])

  const renderAdminMenuItems = React.useCallback((item: AdminMenuItem) => (
    <AppLink to={item.link} activeClassName={cls.AdminMenuItemActive} key={generateKey()}>
      <HStack gap={8} align={'center'}>
        <IconLib
          size={'20'}
          Icon={item.icon}
        />
        <Text>{item.content}</Text>
      </HStack>
    </AppLink>
  ), [])

  return (
    <VStack gap={20} className={classNames(cls.AdminMenu, {}, [className])}>
      {AdminMenuItems.map(renderAdminMenuItems)}
    </VStack>
  )
})
