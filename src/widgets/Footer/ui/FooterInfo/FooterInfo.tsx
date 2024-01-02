import { classNames } from '@lib/helpers/classNames'
import { Logo } from '@ui-kit/Logo/ui/Logo'
import { HStack, VStack } from '@ui-kit/Stack'
import React, { memo } from 'react'
import { RenderFooterBlock } from '../../lib/components/RenderFooterBlock/RenderFooterBlock'
import { useFooterItems } from '../../lib/hooks/useFooterItems'
import cls from './FooterInfo.module.scss'

interface FooterInfoProps {
  className?: string
}

export const FooterInfo: React.FC<FooterInfoProps> = memo((props: FooterInfoProps) => {
  const { className } = props
  const {
    userBlock,
    siteBlock,
  } = useFooterItems()

  return (
    <HStack gap={0} className={classNames(cls.FooterInfo, {}, [className])}>
      <VStack gap={24}>
        <Logo color={'white'} />
      </VStack>

      <HStack gap={0} className={cls.FooterLinks}>
        <RenderFooterBlock block={siteBlock} />
        <RenderFooterBlock block={userBlock} />
      </HStack>
    </HStack>
  )
})
