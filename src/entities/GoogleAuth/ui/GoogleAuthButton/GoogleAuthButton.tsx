import { useAuth } from '@entities/User'
import { type AuthData, GoogleAuth } from '@integrations/google-auth'
import { DynamicReducerLoader, type ReducerList } from '@lib/components/DynamicReducerLoader'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { getRouteProfile } from '@lib/router'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  getGoogleAuthModeSelector,
  getGoogleAuthTokenSelector,
} from '../../model/selectors/GoogleAuthSelectors'
import {
  FetchGoogleToken,
} from '../../model/services/FetchGoogleToken'
import { SaveGoogleData } from '../../model/services/SaveGoogleData'
import { GoogleAuthActions, GoogleAuthReducer } from '../../model/slice/GoogleAuthSlice'

const initialReducers: ReducerList = {
  googleAuth: GoogleAuthReducer,
}

export const GoogleAuthButton: React.FC = memo(() => {
  const dispatch = useAppDispatch()
  const {
    isMounted,
  } = useAuth()
  const clientId = useSelector(getGoogleAuthTokenSelector)
  const mode = useSelector(getGoogleAuthModeSelector)
  const navigate = useNavigate()

  const onChangeAuhGoogle = React.useCallback((userData: AuthData) => {
    dispatch(SaveGoogleData({
      mode,
      user: userData,
    }))
  }, [dispatch, mode])

  React.useEffect(() => {
    if (isMounted) {
      navigate(getRouteProfile())
    }

    if (!isMounted) {
      dispatch(FetchGoogleToken())
      GoogleAuthActions.setMode('login')
    }
  }, [dispatch, isMounted, navigate])

  return (
    <DynamicReducerLoader reducers={initialReducers}>
      <GoogleAuth
        client_id={clientId}
        onChange={onChangeAuhGoogle}
      />
    </DynamicReducerLoader>
  )
})
