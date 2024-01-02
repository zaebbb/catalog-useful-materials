import { VkAuthButton } from '@integrations/vk-auth'
import { DynamicReducerLoader, type ReducerList } from '@lib/components/DynamicReducerLoader'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import {
  getAppIdSelector,
} from '../model/selectors/VkAuthSelectors'
import { FetchGetVKAppId } from '../model/services/FetchGetVKAppId'
import { GetUserData } from '../model/services/GetUserData'
import { VKAuthReducer } from '../model/slice/VKAuthSlice'
import { type VkAuthRedirectResponse } from '../model/types/VKAuthSchema'

interface AuthButtonProps {
  className?: string
}

const reducers: ReducerList = {
  vkAuth: VKAuthReducer,
}

export const AuthButton: React.FC<AuthButtonProps> = memo((props: AuthButtonProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const appId = useSelector(getAppIdSelector)

  React.useEffect(() => {
    dispatch(FetchGetVKAppId())
  }, [dispatch])

  React.useEffect(() => {
    const url = new URL(window.location.href)

    if (url.searchParams.has('payload')) {
      const payload = url.searchParams.get('payload')
      const {
        uuid,
        token,
      } = JSON.parse(String(payload)) as VkAuthRedirectResponse

      if (uuid && token) {
        dispatch(GetUserData({
          uuid,
          token,
        }))
      }
    }
  }, [dispatch])

  return (
    <DynamicReducerLoader reducers={reducers}>
      <VkAuthButton
        className={className}
        appId={appId}
      />
    </DynamicReducerLoader>
  )
})
