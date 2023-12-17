import { LogoutUser, useAuth, UserActions } from '@entities/User'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { getRouteMain } from '@lib/router'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogoutPage: React.FC = React.memo(() => {
  const {
    isMounted,
  } = useAuth()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (isMounted) {
      dispatch(LogoutUser())
      dispatch(UserActions.exitAccount())
    }
  }, [dispatch, isMounted])

  React.useEffect(() => {
    if (!isMounted) {
      navigate(getRouteMain())
    }
  }, [isMounted, navigate])

  return (
    <div />
  )
})

export default LogoutPage
