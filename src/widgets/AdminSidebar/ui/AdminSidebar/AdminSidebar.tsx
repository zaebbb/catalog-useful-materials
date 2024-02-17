import { useAuth } from '@entities/User'
import { AvatarUser } from '@ui-kit/Avatar'
import { VStack } from '@ui-kit/Stack'
import React, { memo } from 'react'
import { AdminMenu } from '../AdminMenu/AdminMenu'

interface AdminSidebarProps {
  className?: string
}

export const AdminSidebar: React.FC<AdminSidebarProps> = memo((props: AdminSidebarProps) => {
  const { className } = props
  const {
    userData,
  } = useAuth()

  return (
    <aside>
      <VStack
        gap={24}
        className={className}
      >
        <AvatarUser
          src={userData.avatar}
          content={userData.email}
          username={userData.username}
          textAlign={'right'}
        />

        <AdminMenu />
      </VStack>
    </aside>
  )
})
