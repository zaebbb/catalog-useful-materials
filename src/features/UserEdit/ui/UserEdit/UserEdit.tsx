import { useAuth } from '@entities/User'
import { SaveUserEditService } from '@features/UserEdit/model/services/SaveUserEditService'
import { DynamicReducerLoader, type ReducerList } from '@lib/components/DynamicReducerLoader'
import { classNames } from '@lib/helpers/classNames'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { getRouteAdminUsers } from '@lib/router'
import { Button } from '@ui-kit/Button'
import { CheckboxField } from '@ui-kit/CheckboxField'
import { HStack, VStack } from '@ui-kit/Stack'
import { TitleLarge } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  getUserEditIsLoadingSelector, getUserEditIsSaveSelector, getUserEditValidationSelector,
  getUserEditValuesSelector,
} from '../../model/selectors/UserEditSelectors'
import { FetchUserEditDataService } from '../../model/services/FetchUserEditData'
import { EditUserActions, EditUserReducer } from '../../model/slice/UserEditSlice'
import cls from './UserEdit.module.scss'

interface UserEditProps {
  className?: string
  email?: string
}

const reducers: ReducerList = {
  userEdit: EditUserReducer,
}

export const UserEdit: React.FC<UserEditProps> = memo((props: UserEditProps) => {
  const {
    className,
    email = '',
  } = props
  const { t } = useTranslation('users-page')
  const {
    userData,
  } = useAuth()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const values = useSelector(getUserEditValuesSelector)
  const isLoading = useSelector(getUserEditIsLoadingSelector)
  const validation = useSelector(getUserEditValidationSelector)
  const isSave = useSelector(getUserEditIsSaveSelector)

  const onCheckboxIsAdminHandler = React.useCallback((value: boolean) => {
    dispatch(EditUserActions.setIsAdmin(value))
  }, [dispatch])

  const onSubmitHandler = React.useCallback(() => {
    dispatch(SaveUserEditService())
  }, [dispatch])

  React.useEffect(() => {
    if (email === userData.email) {
      navigate(getRouteAdminUsers())
    }

    if (email) {
      dispatch(FetchUserEditDataService(email))
    }

    if (isSave) {
      navigate(getRouteAdminUsers())
    }
  }, [dispatch, email, isSave, navigate, userData.email])

  return (
    <DynamicReducerLoader reducers={reducers}>
      <VStack
        gap={24}
        className={classNames(cls.UserEdit, {}, [className])}
      >
        <TitleLarge>
          {t('user-edit-title')}
        </TitleLarge>

        <VStack gap={16}>
          <CheckboxField
            label={t('user-edit-admin-checkbox-label')}
            checked={values?.isAdmin}
            validation={validation?.isAdmin}
            onChange={onCheckboxIsAdminHandler}
            isLoading={isLoading}
          />

          <CheckboxField
            label={t('user-edit-user-checkbox-label')}
            checked={values?.isUser}
            validation={validation?.isUser}
            isReadonly
            isLoading={isLoading}
          />

          <HStack justify={'flex-end'}>
            <Button
              isDisabled={isLoading}
              onClick={onSubmitHandler}
            >
              {t('user-edit-button-save')}
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </DynamicReducerLoader>
  )
})
