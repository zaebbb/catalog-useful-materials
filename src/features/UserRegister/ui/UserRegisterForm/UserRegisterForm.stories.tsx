import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { UserRegisterForm } from './UserRegisterForm'

const meta: Meta<typeof UserRegisterForm> = {
  title: 'features/UserRegisterForm',
  component: UserRegisterForm,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof UserRegisterForm>

export const Primary: Story = {}
