import { type IconLibName } from '@lib/helpers/IconElement'
import { classNames } from '@lib/helpers/classNames'
import { generateKey } from '@lib/helpers/generateKey'
import { getRouteCreateNote, getRouteLogout, getRouteProfile } from '@lib/router'
import { AppLink } from '@ui-kit/AppLink'
import { IconLib } from '@ui-kit/Icon'
import { HStack, VStack } from '@ui-kit/Stack'
import { Text } from '@ui-kit/Text'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './ProfileMenu.module.scss'

interface ProfileMenuItem {
  link: string
  content: string
  icon: IconLibName
}

interface ProfileMenuProps {
  className?: string
}

export const ProfileMenu: React.FC<ProfileMenuProps> = memo((props: ProfileMenuProps) => {
  const { className } = props
  const { t } = useTranslation('profile-sidebar')

  const ProfileMenuItems = React.useMemo((): ProfileMenuItem[] => ([
    {
      content: t('profile-sidebar-profile'),
      link: getRouteProfile(),
      icon: 'IconUser',
    },
    {
      content: t('profile-sidebar-create-note'),
      link: getRouteCreateNote(),
      icon: 'IconPlusOutline',
    },
    {
      content: t('profile-sidebar-logout'),
      link: getRouteLogout(),
      icon: 'IconExitOutline',
    },
  ]), [t])

  const renderProfileMenuItems = React.useCallback((item: ProfileMenuItem) => (
    <AppLink to={item.link} activeClassName={cls.ProfileMenuItemActive} key={generateKey()}>
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
    <VStack gap={20} className={classNames(cls.ProfileMenu, {}, [className])}>
      {ProfileMenuItems.map(renderProfileMenuItems)}
    </VStack>
  )
})
