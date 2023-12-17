import { classNames, type Mods } from '@lib/helpers/classNames'
import { useDevice } from '@lib/hooks/useDevice'
import { AppPadding } from '@ui-kit/AppPadding'
import { VStack } from '@ui-kit/Stack'
import React, { memo } from 'react'
import { FooterBottomContent } from '../FooterBottomContent/FooterBottomContent'
import { FooterInfo } from '../FooterInfo/FooterInfo'
import cls from './Footer.module.scss'

interface FooterProps {
  className?: string
}

export const Footer: React.FC<FooterProps> = memo((props: FooterProps) => {
  const { className } = props
  const {
    isLaptop,
    isMobile,
    isTablet,
  } = useDevice()

  const mods: Mods = {
    [cls.FooterLaptop]: isLaptop,
    [cls.FooterMobile]: isMobile,
    [cls.FooterTablet]: isTablet,
  }

  return (
    <AppPadding className={classNames(cls.Footer, mods, [className])}>
      <VStack gap={0}>
        <FooterInfo />
        <div className={cls.FooterLine} />
        <FooterBottomContent />
      </VStack>
    </AppPadding>
  )
})
