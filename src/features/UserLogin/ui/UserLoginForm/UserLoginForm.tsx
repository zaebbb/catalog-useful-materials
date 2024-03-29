import { GoogleAuthButton } from '@entities/GoogleAuth'
import { useAuth } from '@entities/User'
import { AuthButton as VkAuthButton } from '@entities/VKAuth'
import { DynamicReducerLoader, type ReducerList } from '@lib/components/DynamicReducerLoader'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { getRouteProfile, getRouteRegister } from '@lib/router'
import { AppLink } from '@ui-kit/AppLink'
import { Button } from '@ui-kit/Button'
import { InputField, InputFieldPassword } from '@ui-kit/InputField'
import { HStack, VStack } from '@ui-kit/Stack'
import { Span, Text } from '@ui-kit/Text'
import { TitleLarge } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  getEmailSelector, getIsLoadingSelector,
  getPasswordSelector,
  getValidationSelector,
} from '../../model/selectors/UserLoginSelectors'
import { UserLoginRequest } from '../../model/services/UserLoginRequest'
import { UserLoginActions, UserLoginReducer } from '../../model/slice/UserLoginSlice'
import cls from './UserLoginForm.module.scss'

interface UserLoginFormProps {
  className?: string
}

const initialReducers: ReducerList = {
  userLoginForm: UserLoginReducer,
}

export const UserLoginForm: React.FC<UserLoginFormProps> = memo((props: UserLoginFormProps) => {
  const { className } = props
  const { t } = useTranslation('user-login-form')
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getIsLoadingSelector)
  const navigate = useNavigate()
  const {
    isMounted,
  } = useAuth()
  const email = useSelector(getEmailSelector)
  const password = useSelector(getPasswordSelector)
  const validation = useSelector(getValidationSelector)

  const onChangeEmail = React.useCallback((value: string) => {
    dispatch(UserLoginActions.setEmail(value))
  }, [dispatch])

  const onChangePassword = React.useCallback((value: string) => {
    dispatch(UserLoginActions.setPassword(value))
  }, [dispatch])

  const onSubmit = React.useCallback(async () => {
    await dispatch(UserLoginRequest({
      email,
      password,
    }))
  }, [dispatch, email, password])

  React.useEffect(() => {
    if (isMounted) {
      navigate(getRouteProfile())
    }
  }, [isMounted, navigate])

  return (
    <DynamicReducerLoader reducers={initialReducers}>
      <HStack justify={'center'} className={className}>
        <VStack gap={40} justify={'center'} className={cls.UserLoginForm} isMax>
          <TitleLarge align={'center'}>
            <Span
              color={'gradient'}
              content={t('title-1')}
            />
            {' '}
            {t('title-2')}
          </TitleLarge>
          <VStack gap={32}>
            <InputField
              isMax
              label={t('input-label-email')}
              value={email}
              onChange={onChangeEmail}
              validation={validation.email ?? validation.auth}
              isLoading={isLoading}
              isRequired
            />
            <InputFieldPassword
              isMax
              label={t('input-label-password')}
              value={password}
              onChange={onChangePassword}
              validation={validation.password ?? validation.auth}
              isLoading={isLoading}
              isRequired
            />

            <VStack gap={24} isMax>
              <Button
                size={'large'}
                onClick={onSubmit}
                isDisabled={isLoading}
              >
                {t('button-login')}
              </Button>

              <AppLink to={getRouteRegister()}>
                <Button
                  fill={'border'}
                  size={'large'}
                  isDisabled={isLoading}
                  className={cls.RegisterButton}
                >
                  {t('button-register')}
                </Button>
              </AppLink>

              <Text align={'center'}>
                {t('alternate-auth')}
              </Text>

              <div className={cls.AuthorizeSocial}>
                <GoogleAuthButton />
                <VkAuthButton />
              </div>
            </VStack>
          </VStack>
        </VStack>
      </HStack>
    </DynamicReducerLoader>
  )
})
