import { useAuth } from '@entities/User'
import { AvatarUser } from '@ui-kit/Avatar'
import React, { memo } from 'react'
import cls from './NavbarUserInfo.module.scss'

export const NavbarUserInfo: React.FC = memo(() => {
  const {
    userData,
  } = useAuth()

  return (
    <>
      <div className={cls.VerticalLine} />
      <AvatarUser
        src={userData.avatar}
        content={userData.email}
        username={userData.username}
        size={'medium'}
      />
    </>
  )
})
