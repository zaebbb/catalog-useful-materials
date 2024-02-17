import { generateKey } from '@lib/helpers/generateKey'
import { AppLink } from '@ui-kit/AppLink'
import { VStack } from '@ui-kit/Stack'
import { Text } from '@ui-kit/Text'
import { TitleMedium } from '@ui-kit/Title'
import React, { memo } from 'react'
import { type LinksBlock } from '../hooks/useSitemapItems'

interface RenderLinkBlockProps {
  block: LinksBlock
}

export const RenderLinkBlock: React.FC<RenderLinkBlockProps> =
  memo((props: RenderLinkBlockProps) => {
    const {
      block,
    } = props

    return (
      <VStack gap={16}>
        <TitleMedium>
          {block.title}
        </TitleMedium>

        <VStack gap={8}>
          {block.links.map((link) => (
            <AppLink to={link.href} key={generateKey()}>
              <Text>
                {link.content}
              </Text>
            </AppLink>
          ))}
        </VStack>
      </VStack>
    )
  })
