import { AppPadding } from '@ui-kit/AppPadding'
import { Button } from '@ui-kit/Button'
import { VStack } from '@ui-kit/Stack'
import { TitleMedium } from '@ui-kit/Title'
import { PageLoader } from '@widgets/PageLoader'
import i18next from 'i18next'
import React, { Suspense } from 'react'
import { withTranslation } from 'react-i18next'

type ErrorBoundaryProps = React.PropsWithChildren

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch (error: Error, info: React.ErrorInfo): void {
    console.log(error, info)
  }

  render (): React.ReactNode {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      return (
        <Suspense fallback={<PageLoader />}>
          <AppPadding>
            <VStack gap={16}>
              <TitleMedium>
                {i18next.t('error-boundary')}
              </TitleMedium>
              <Button
                onClick={() => { window.location.reload() } }
              >
                {i18next.t('error-page-reload')}
              </Button>
            </VStack>
          </AppPadding>
        </Suspense>
      )
    }

    return children
  }
}

export default withTranslation()(ErrorBoundary)
