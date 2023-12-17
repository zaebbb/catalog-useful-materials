import { classNames } from '@lib/helpers/classNames'
import { Logo } from '@ui-kit/Logo/ui/Logo'
import { HStack } from '@ui-kit/Stack'
import React, { memo } from 'react'
import cls from './FooterInfo.module.scss'

interface FooterInfoProps {
  className?: string
}

export const FooterInfo: React.FC<FooterInfoProps> = memo((props: FooterInfoProps) => {
  const { className } = props

  return (
    <HStack gap={0} className={classNames(cls.FooterInfo, {}, [className])}>
      <Logo color={'white'} />
    </HStack>
  )
})
