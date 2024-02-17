import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import UserEditPage from './UserEditPage'

const meta: Meta<typeof UserEditPage> = {
  title: 'pages/UserEditPage',
  component: UserEditPage,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof UserEditPage>

export const Primary: Story = {}
