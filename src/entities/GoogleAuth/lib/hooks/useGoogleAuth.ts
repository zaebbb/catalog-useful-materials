import { type AuthData } from '@integrations/google-auth'
import { useSelector } from 'react-redux'
import {
  getGoogleAuthIsLoadingSelector,
  getGoogleAuthModeSelector,
  getGoogleAuthUserSelector,
  getGoogleIsAuth,
} from '../../model/selectors/GoogleAuthSelectors'
import { type AuthMode } from '../../model/types/GoogleAuthTypes'

interface UseGoogleAuthResult {
  isLoading: boolean
  mode: AuthMode
  authData: AuthData | undefined
  isAuth: boolean
}

export const useGoogleAuth = (): UseGoogleAuthResult => {
  const isLoading = useSelector(getGoogleAuthIsLoadingSelector)
  const mode = useSelector(getGoogleAuthModeSelector)
  const authData = useSelector(getGoogleAuthUserSelector)
  const isAuth = useSelector(getGoogleIsAuth)

  return {
    isLoading,
    mode,
    authData,
    isAuth,
  }
}
