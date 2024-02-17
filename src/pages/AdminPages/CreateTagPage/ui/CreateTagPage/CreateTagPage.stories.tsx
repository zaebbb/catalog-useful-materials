import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import CreateTagPage from './CreateTagPage'

const meta: Meta<typeof CreateTagPage> = {
  title: 'pages/CreateTagPage',
  component: CreateTagPage,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof CreateTagPage>

export const Primary: Story = {}
