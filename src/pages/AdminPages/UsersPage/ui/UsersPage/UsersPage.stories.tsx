import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import UsersPage from './UsersPage'

const meta: Meta<typeof UsersPage> = {
  title: 'pages/UsersPage',
  component: UsersPage,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof UsersPage>

export const Primary: Story = {}
