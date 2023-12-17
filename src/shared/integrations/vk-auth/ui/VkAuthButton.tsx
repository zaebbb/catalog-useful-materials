import React from 'react'
import { vkAuthorizationButton } from '../lib/init'
import cls from './VkAuthButton.module.scss'

export const VkAuthButton: React.FC = () => {
  return (
    <iframe
      className={cls.VkAuthButton}
      src={vkAuthorizationButton?.getFrame()?.src}
    />
  )
}
