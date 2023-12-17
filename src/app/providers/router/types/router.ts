import type React from 'react'

export interface RouteItem {
  element: React.ReactElement
  path: string
  isAuth?: boolean
}

export type RouteList = RouteItem[]
