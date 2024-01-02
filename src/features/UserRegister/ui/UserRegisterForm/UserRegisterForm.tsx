import { GoogleAuthButton } from '@entities/GoogleAuth'
import { useAuth } from '@entities/User'
import { AuthButton as VkAuthButton } from '@entities/VKAuth'
import { DynamicReducerLoader, type ReducerList } from '@lib/components/DynamicReducerLoader'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { getRouteLogin, getRoutePrivacyPolicy, getRouteProfile } from '@lib/router'
import { AppLink } from '@ui-kit/AppLink'
import { Button } from '@ui-kit/Button'
import { CheckboxField } from '@ui-kit/CheckboxField'
import { InputField, InputFieldPassword } from '@ui-kit/InputField'
import { HStack, VStack } from '@ui-kit/Stack'
import { Span, Text } from '@ui-kit/Text'
import { TitleLarge } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  getRegisterEmailSelector,
  getRegisterPasswordSelector,
  getRegisterRepeatPasswordSelector, getRegisterUserConsentSelector,
  getRegisterUsernameSelector,
  getUserRegisterIsLoading, getUserRegisterValidation,
} from '../../model/selectors/UserRegisterSelectors'
import { UserRegisterRequest } from '../../model/services/UserRegisterRequest'
import { UserRegisterActions, UserRegisterReducer } from '../../model/slice/UserRegisterSlice'
import cls from './UserRegisterForm.module.scss'

interface UserRegisterFormProps {
  className?: string
}

const reducers: ReducerList = {
  userRegister: UserRegisterReducer,
}

export const UserRegisterForm: React.FC<UserRegisterFormProps> =
  memo((props: UserRegisterFormProps) => {
    const { className } = props
    const { t } = useTranslation('register-page')
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getUserRegisterIsLoading)
    const validation = useSelector(getUserRegisterValidation)
    const navigate = useNavigate()
    const {
      isMounted,
    } = useAuth()

    const emailValue = useSelector(getRegisterEmailSelector)
    const usernameValue = useSelector(getRegisterUsernameSelector)
    const passwordValue = useSelector(getRegisterPasswordSelector)
    const repeatPasswordValue = useSelector(getRegisterRepeatPasswordSelector)
    const userConsentValue = useSelector(getRegisterUserConsentSelector)

    const onChangeEmailHandler = React.useCallback((value: string) => {
      dispatch(UserRegisterActions.setEmail(value))
    }, [dispatch])

    const onChangeUsernameHandler = React.useCallback((value: string) => {
      dispatch(UserRegisterActions.setUsername(value))
    }, [dispatch])

    const onChangePasswordHandler = React.useCallback((value: string) => {
      dispatch(UserRegisterActions.setPassword(value))
    }, [dispatch])

    const onChangeRepeatPasswordHandler = React.useCallback((value: string) => {
      dispatch(UserRegisterActions.setRepeatPassword(value))
    }, [dispatch])

    const onChangeUserConsentHandler = React.useCallback((value: boolean) => {
      dispatch(UserRegisterActions.setUserConsent(value))
    }, [dispatch])

    const onSubmit = React.useCallback(async () => {
      await dispatch(UserRegisterRequest())
    }, [dispatch])

    const onPasteRepeatPasswordHandler = React.useCallback((
      e: React.ClipboardEvent<HTMLInputElement>
    ) => {
      e.preventDefault()
    }, [])

    React.useEffect(() => {
      if (isMounted) {
        navigate(getRouteProfile())
      }
    }, [isMounted, navigate])

    return (
      <DynamicReducerLoader reducers={reducers}>
        <HStack justify={'center'} className={className}>
          <VStack
            gap={40}
            justify={'center'}
            className={cls.UserRegisterForm}
            isMax
          >
            <TitleLarge>
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
                placeholder={t('input-placeholder-email')}
                isLoading={isLoading}
                validation={validation?.email}
                onChange={onChangeEmailHandler}
                value={emailValue}
              />

              <InputField
                isMax
                label={t('input-label-username')}
                placeholder={t('input-placeholder-username')}
                isLoading={isLoading}
                validation={validation?.username}
                onChange={onChangeUsernameHandler}
                value={usernameValue}
              />

              <InputFieldPassword
                isMax
                label={t('input-label-password')}
                placeholder={t('input-placeholder-password')}
                isLoading={isLoading}
                validation={validation?.password}
                onChange={onChangePasswordHandler}
                value={passwordValue}
              />

              <InputFieldPassword
                isMax
                label={t('input-label-repeat-password')}
                placeholder={t('input-placeholder-repeat-password')}
                isLoading={isLoading}
                validation={validation?.repeatPassword}
                onChange={onChangeRepeatPasswordHandler}
                value={repeatPasswordValue}
                onPaste={onPasteRepeatPasswordHandler}
              />

              <CheckboxField
                label={(
                  <Text className={cls.UserConsentLabel}>
                    {t('input-label-user-consent-1')}
                    <div className={cls.UserRegisterSeparator} />
                    <AppLink to={getRoutePrivacyPolicy()} isBlank>
                      <Span
                        content={t('input-label-user-consent-2')}
                        color={'info'}
                        variant={'80'}
                      />
                    </AppLink>
                  </Text>
                )}
                isLoading={isLoading}
                validation={validation?.userConsent}
                checked={userConsentValue}
                onChange={onChangeUserConsentHandler}
              />

              <VStack gap={24} isMax>
                <Button
                  size={'large'}
                  onClick={onSubmit}
                  isDisabled={isLoading}
                >
                  {t('button-register')}
                </Button>

                <Text align={'center'} className={cls.UserRegisterLogin}>
                  {t('login-1')}
                  <div className={cls.UserRegisterSeparator} />
                  <AppLink to={getRouteLogin()} isBlank>
                    <Span
                      content={t('login-2')}
                      color={'info'}
                      variant={'80'}
                    />
                  </AppLink>
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
