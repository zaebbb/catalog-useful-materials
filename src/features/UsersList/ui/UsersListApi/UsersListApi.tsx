import { UsersList } from '@entities/User'
import React, { memo } from 'react'
import { useUsersList } from '../../api/usersListApi'

interface UsersListProps {
  className?: string
}

export const UsersListApi: React.FC<UsersListProps> = memo((props: UsersListProps) => {
  const { className } = props

  const {
    isLoading,
    data: users,
    refetch,
  } = useUsersList()

  React.useEffect(() => {
    refetch()
  }, [refetch])

  return (
    <UsersList
      users={users?.success}
      className={className}
      isLoading={isLoading}
      isAccess
    />
  )
})
