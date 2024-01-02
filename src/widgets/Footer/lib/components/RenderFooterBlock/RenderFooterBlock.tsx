import { generateKey } from '@lib/helpers/generateKey'
import { VStack } from '@ui-kit/Stack'
import { Span, Text } from '@ui-kit/Text'
import { RenderFooterItem } from '@widgets/Footer/lib/components/RenderFooterItem/RenderFooterItem'
import React, { memo } from 'react'
import { type FooterBlock } from '../../types/FooterType'

interface RenderFooterBlockProps {
  className?: string
  block: FooterBlock
}

export const RenderFooterBlock: React.FC<RenderFooterBlockProps> =
  memo((props: RenderFooterBlockProps) => {
    const {
      className,
      block,
    } = props

    return (
      <VStack gap={40} className={className}>
        <Text>
          <Span color={'gradient'} content={block.title} />
        </Text>
        <VStack gap={12}>
          {block.items.map((item) => (
            <RenderFooterItem
              item={item}
              key={generateKey()}
            />
          ))}
        </VStack>
      </VStack>
    )
  })
