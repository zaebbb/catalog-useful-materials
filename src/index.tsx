import App from '@app/App'
import { ErrorBoundary } from '@app/providers/ErrorBoundary'
import { StoreProvider } from '@app/providers/StoreProvider'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import '@config/i18next/init'

const container = document.getElementById('root')

if (!container) {
  throw new Error('Error starting app')
}

const root = createRoot(container)

root.render(
  <BrowserRouter>
    <StoreProvider>
      <HelmetProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </HelmetProvider>

    </StoreProvider>
  </BrowserRouter>
)
