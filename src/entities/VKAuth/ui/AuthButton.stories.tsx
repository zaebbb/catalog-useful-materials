import type { Meta, StoryObj } from '@storybook/react'
import { AuthButton } from './AuthButton'

const meta: Meta<typeof AuthButton> = {
  title: 'CHANGE/AuthButton',
  component: AuthButton,
}

export default meta
type Story = StoryObj<typeof AuthButton>

export const Primary: Story = {}
