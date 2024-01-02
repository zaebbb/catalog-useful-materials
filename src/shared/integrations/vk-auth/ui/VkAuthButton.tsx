import { classNames } from '@lib/helpers/classNames'
import { IconLib } from '@ui-kit/Icon'
import { Loader } from '@ui-kit/Loader'
import { HStack } from '@ui-kit/Stack'
import * as VKID from '@vkid/sdk'
import React from 'react'
import { useTranslation } from 'react-i18next'
import cls from './VkAuthButton.module.scss'

interface VkAuthButtonProps {
  appId?: number
  className?: string
}

export const VkAuthButton: React.FC<VkAuthButtonProps> = (props: VkAuthButtonProps) => {
  const {
    appId,
    className,
  } = props
  const { t } = useTranslation('ui-kit')

  const onClickHandler = React.useCallback(() => {
    VKID.Auth.login()
  }, [])

  React.useEffect(() => {
    if (appId) {
      VKID.Config.set({
        app: appId,
        redirectUrl: window.location.href,
      })
    }
  }, [appId])

  if (!appId) {
    return (
      <HStack justify={'center'} align={'center'}>
        <Loader size={30} />
      </HStack>
    )
  }

  return (
    <button
      type={'button'}
      onClick={onClickHandler}
      className={classNames(cls.VkAuthButton, {}, [className, cls.VkButton])}
    >
      <HStack
        className={cls.ButtonContainer}
        gap={16}
        align={'center'}
        justify={'flex-start'}
      >
        <div className={cls.Icon}>
          <IconLib
            Icon={'IconLogoVK'}
            size={'24'}
          />
        </div>
        <div className={cls.Content}>
          {t('vk-button-text')}
        </div>
      </HStack>
    </button>
  )
}
