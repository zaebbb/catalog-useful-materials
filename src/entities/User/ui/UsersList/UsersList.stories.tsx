import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { UsersList } from './UsersList'

const meta: Meta<typeof UsersList> = {
  title: 'entities/User/UsersList',
  component: UsersList,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof UsersList>

export const Primary: Story = {}
