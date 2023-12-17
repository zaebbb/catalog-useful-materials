import { classNames } from '@lib/helpers/classNames'
import { HStack } from '@ui-kit/Stack'
import { Text } from '@ui-kit/Text'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './FooterBottomContent.module.scss'

interface FooterBottomContentProps {
  className?: string
}

export const FooterBottomContent: React.FC<FooterBottomContentProps> =
  memo((props: FooterBottomContentProps) => {
    const { className } = props
    const { t } = useTranslation('footer')

    return (
      <HStack
        justify={'space-between'}
        gap={16}
        className={classNames(cls.FooterBottomContent, {}, [className])}
      >
        <Text color={'white'}>
          {t('copyright')}
        </Text>
      </HStack>
    )
  })
