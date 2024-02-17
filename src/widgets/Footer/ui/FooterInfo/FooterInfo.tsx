import { classNames } from '@lib/helpers/classNames'
import { AppLink } from '@ui-kit/AppLink'
import { Logo } from '@ui-kit/Logo/ui/Logo'
import { HStack, VStack } from '@ui-kit/Stack'
import { Text } from '@ui-kit/Text'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation('footer')

  return (
    <HStack
      gap={0}
      isWrap
      className={classNames(cls.FooterInfo, {}, [className])}
    >
      <VStack gap={24}>
        <Logo color={'white'} />

        <Text color={'white'} type={'small'} className={cls.FreepikInfo}>
          {t('freepik-info')}
          <AppLink
            to={t('freepik-link')}
            isBlank
            mode={'tag'}
          >
            <Text color={'white'} type={'small'}>
              {t('freepik')}
            </Text>
          </AppLink>
        </Text>
      </VStack>

      <HStack gap={0} className={cls.FooterLinks} isWrap>
        <RenderFooterBlock block={siteBlock} />
        <RenderFooterBlock block={userBlock} />
      </HStack>
    </HStack>
  )
})
