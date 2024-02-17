import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import TagsPage from './TagsPage'

const meta: Meta<typeof TagsPage> = {
  title: 'pages/TagsPage',
  component: TagsPage,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof TagsPage>

export const Primary: Story = {}
