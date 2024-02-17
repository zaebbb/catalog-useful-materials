import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { UserEdit } from './UserEdit'

const meta: Meta<typeof UserEdit> = {
  title: 'features/UserEdit',
  component: UserEdit,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof UserEdit>

export const Primary: Story = {}
