import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { AuthButton } from './AuthButton'

const meta: Meta<typeof AuthButton> = {
  title: 'entities/AuthButton',
  component: AuthButton,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof AuthButton>

export const Primary: Story = {}
