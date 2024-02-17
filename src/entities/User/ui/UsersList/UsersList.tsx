import { classNames } from '@lib/helpers/classNames'
import { generateKey } from '@lib/helpers/generateKey'
import { getRouteAdminEditUser } from '@lib/router'
import { Card, CardSkeleton } from '@ui-kit/Card'
import { VStack } from '@ui-kit/Stack'
import { Text } from '@ui-kit/Text'
import { TitleLarge } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../lib/hooks/useAuth'
import { type UserData } from '../../model/types/UserSchema'
import cls from './UsersList.module.scss'

interface UsersListProps {
  className?: string
  users?: UserData[]
  isLoading?: boolean
}

export const UsersList: React.FC<UsersListProps> = memo((props: UsersListProps) => {
  const {
    className,
    users = [],
    isLoading,
  } = props
  const {
    userData,
  } = useAuth()
  const { t } = useTranslation('users-page')

  return (
    <VStack
      isMax
      gap={20}
      isWrap
      className={classNames(cls.UsersList, {}, [className])}
    >
      <TitleLarge>
        {t('title')}
      </TitleLarge>

      <div className={cls.Cards}>
        {isLoading && Array(10).fill('').map(() => (
          <CardSkeleton
            key={generateKey()}
            className={cls.Card}
          />
        ))}

        {Boolean(!users.length && !isLoading) && (
          <Text>{t('users-not-found')}</Text>
        )}

        {!isLoading && users.map(user => (
          <Card
            key={user.email}
            userAvatar={user.avatar}
            username={user.username}
            description={user.email}
            className={cls.Card}
            isAccess={user.id !== userData.id}
            editLink={getRouteAdminEditUser(user.email)}
            isDelete={false}
          />
        ))}
      </div>
    </VStack>
  )
})
