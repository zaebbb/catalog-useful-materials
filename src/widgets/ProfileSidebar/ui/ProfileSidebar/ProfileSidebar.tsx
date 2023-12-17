import { useAuth } from '@entities/User'
import { AvatarUser } from '@ui-kit/Avatar'
import { VStack } from '@ui-kit/Stack'
import React, { memo } from 'react'
import { ProfileMenu } from '../ProfileMenu/ProfileMenu'

interface ProfileSidebarProps {
  className?: string
}

export const ProfileSidebar: React.FC<ProfileSidebarProps> = memo((props: ProfileSidebarProps) => {
  const { className } = props
  const {
    userData,
  } = useAuth()

  return (
    <aside>
      <VStack
        gap={24}
        className={className}>
        <AvatarUser
          src={userData.avatar}
          content={userData.email}
          username={userData.username}
          textAlign={'right'}
        />
        <ProfileMenu />
      </VStack>
    </aside>
  )
})
