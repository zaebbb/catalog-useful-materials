import { DynamicReducerLoader, type ReducerList } from '@lib/components/DynamicReducerLoader'
import { classNames } from '@lib/helpers/classNames'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import { Button } from '@ui-kit/Button'
import { InputField, InputFieldFile } from '@ui-kit/InputField'
import { HStack, VStack } from '@ui-kit/Stack'
import { Span } from '@ui-kit/Text'
import { TitleLarge } from '@ui-kit/Title'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  getProfileEditIsLoading, getProfileEditMounted,
  getProfileEditUserData, getProfileEditValidation,
} from '../../model/selectors/ProfileEditSelectors'
import { FetchProfileData } from '../../model/services/fetchProfileData'
import { SaveProfileData } from '../../model/services/saveProfileData'
import { ProfileEditActions, ProfileEditReducer } from '../../model/slice/ProfileEditSlice'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
}

const reducers: ReducerList = {
  profileEdit: ProfileEditReducer,
}

export const ProfileCard: React.FC<ProfileCardProps> = memo((props: ProfileCardProps) => {
  const { className } = props
  const { t } = useTranslation('profile')
  const user = useSelector(getProfileEditUserData)
  const isLoading = useSelector(getProfileEditIsLoading)
  const isMounted = useSelector(getProfileEditMounted)
  const validation = useSelector(getProfileEditValidation)
  const dispatch = useAppDispatch()
  const [filesState, setFiles] = React.useState<Files>([])

  React.useEffect(() => {
    if (!isMounted) {
      dispatch(FetchProfileData())
    }
  }, [dispatch, isMounted])

  const onChangeName = React.useCallback((value: string) => {
    dispatch(ProfileEditActions.setName(value))
  }, [dispatch])

  const onChangeSurname = React.useCallback((value: string) => {
    dispatch(ProfileEditActions.setSurname(value))
  }, [dispatch])

  const onChangePatronymic = React.useCallback((value: string) => {
    dispatch(ProfileEditActions.setPatronymic(value))
  }, [dispatch])

  const onChangeAvatar = React.useCallback((files: Files) => {
    if (files.length) {
      setFiles([files[0]])
    }
  }, [])

  const onSubmit = React.useCallback(() => {
    dispatch(SaveProfileData(filesState))
  }, [dispatch, filesState])

  return (
    <DynamicReducerLoader reducers={reducers}>
      <VStack className={classNames(cls.ProfileCard, {}, [className])} gap={40}>
        <TitleLarge>
          <Span color={'gradient'} content={t('title-profile-1')} />
          {' '}
          {t('title-profile-2')}
        </TitleLarge>

        <VStack gap={20} className={cls.ProfileCardWrapper}>
          <InputFieldFile
            value={filesState}
            isLoading={isLoading}
            onChange={onChangeAvatar}
            validation={validation.avatar}
            remoteFiles={user.avatar ? [user.avatar] : []}
          />

          <HStack gap={20} isMax className={cls.Fields}>
            <InputField
              label={t('profile-input-name-label')}
              placeholder={t('profile-input-name-placeholder')}
              value={user.name}
              isLoading={isLoading}
              onChange={onChangeName}
              validation={validation.name}
              isMax
            />
            <InputField
              label={t('profile-input-surname-label')}
              placeholder={t('profile-input-surname-placeholder')}
              value={user.surname}
              onChange={onChangeSurname}
              isLoading={isLoading}
              validation={validation.surname}
              isMax
            />
            <InputField
              label={t('profile-input-patronymic-label')}
              placeholder={t('profile-input-patronymic-placeholder')}
              value={user.patronymic}
              onChange={onChangePatronymic}
              isLoading={isLoading}
              validation={validation.patronymic}
              isMax
            />
          </HStack>
          <HStack justify={'flex-end'}>
            <Button
              size={'large'}
              onClick={onSubmit}
            >
              {t('profile-button-save')}
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </DynamicReducerLoader>
  )
})
