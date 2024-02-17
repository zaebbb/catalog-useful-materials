import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import SitemapPage from './SitemapPage'

const meta: Meta<typeof SitemapPage> = {
  title: 'pages/SitemapPage',
  component: SitemapPage,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof SitemapPage>

export const Primary: Story = {}
