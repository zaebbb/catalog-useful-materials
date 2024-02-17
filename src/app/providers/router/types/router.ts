import type React from 'react'

export interface RouteItem {
  element: React.ReactElement
  path: string
  isAuth?: boolean
  isAdmin?: boolean
}

export type RouteList = RouteItem[]
