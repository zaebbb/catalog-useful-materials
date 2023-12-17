import './styles/index.scss'
import { MountedUser } from '@entities/User'
import { MainLayout } from '@layout/MainLayout/ui/MainLayout'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { Footer } from '@widgets/Footer'
import { Navbar } from '@widgets/Navbar'
import { PageLoader } from '@widgets/PageLoader'
import React, { Suspense } from 'react'
import { AppRouter } from './providers/router/ui/AppRouter'

const App: React.FC = () => {
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(MountedUser())
  }, [dispatch])

  return (
    <Suspense fallback={<PageLoader />}>
      <MainLayout
        FooterBlock={<Footer />}
        NavbarBlock={<Navbar />}
        ContentBlock={<AppRouter />}
      />
    </Suspense>
  )
}

export default App
