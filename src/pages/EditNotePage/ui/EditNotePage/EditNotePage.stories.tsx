import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import EditNotePage from './EditNotePage'

const meta: Meta<typeof EditNotePage> = {
  title: 'pages/EditNotePage',
  component: EditNotePage,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof EditNotePage>

export const Primary: Story = {}
