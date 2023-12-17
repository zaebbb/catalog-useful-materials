import { useAuth } from '@entities/User'
import { getRouteForbidden } from '@lib/router'
import React from 'react'
import { Route, Navigate, useLocation } from 'react-router-dom'
import { type RouteItem } from '../types/router'

export const RenderRoutes = (routeItem: RouteItem): React.ReactNode => {
  const {
    isMounted,
    isLoading,
  } = useAuth()
  const location = useLocation()

  if (routeItem.isAuth && !isMounted && !isLoading) {
    return (
      <Route
        key={routeItem.path}
        element={
          <Navigate
            key={routeItem.path}
            to={getRouteForbidden()}
            state={{ from: location }}
            replace
          />
        }
        path={routeItem.path}
      />
    )
  }

  return (
    <Route
      key={routeItem.path}
      element={routeItem.element}
      path={routeItem.path}
    />
  )
}
