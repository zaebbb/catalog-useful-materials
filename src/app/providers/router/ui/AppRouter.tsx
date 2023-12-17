import { PageLoader } from '@widgets/PageLoader'
import React, { Suspense } from 'react'
import { Routes } from 'react-router-dom'
import { routeConfig } from '../config/routeConfig'
import { RenderRoutes } from '../lib/renderRoutes'

export const AppRouter: React.FC = React.memo(() => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(RenderRoutes)}
      </Routes>
    </Suspense>
  )
})
