import { LogoutUser, useAuth, UserActions } from '@entities/User'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { getRouteMain } from '@lib/router'
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const LogoutPage: React.FC = React.memo(() => {
  const {
    isMounted,
  } = useAuth()
  const dispatch = useAppDispatch()
  const location = useLocation()

  React.useEffect(() => {
    if (isMounted) {
      dispatch(LogoutUser())
      dispatch(UserActions.exitAccount())
    }
  }, [dispatch, isMounted])

  if (!isMounted) {
    return (
      <Navigate
        to={getRouteMain()}
        state={{ from: location }}
        replace
      />
    )
  }

  return (
    <div />
  )
})

export default LogoutPage
