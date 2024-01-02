import { AppLink } from '@ui-kit/AppLink'
import { Text } from '@ui-kit/Text'
import React, { memo } from 'react'
import { type FooterItem } from '../../types/FooterType'

interface RenderFooterItemProps {
  className?: string
  item: FooterItem
}

export const RenderFooterItem: React.FC<RenderFooterItemProps> =
  memo((props: RenderFooterItemProps) => {
    const {
      className,
      item,
    } = props

    return (
      <AppLink to={item.link} className={className}>
        <Text color={'white'} type={'small'}>
          {item.content}
        </Text>
      </AppLink>
    )
  })
