import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import CreateNotePage from './CreateNotePage'

const meta: Meta<typeof CreateNotePage> = {
  title: 'pages/CreateNotePage',
  component: CreateNotePage,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof CreateNotePage>

export const Primary: Story = {
  decorators: [
    StoreDecorator({

    }),
  ],
}
