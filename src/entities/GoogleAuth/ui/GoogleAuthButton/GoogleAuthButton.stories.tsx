import type { Meta, StoryObj } from '@storybook/react'
import { GoogleAuthButton } from './GoogleAuthButton'

const meta: Meta<typeof GoogleAuthButton> = {
  title: 'entities/GoogleAuthButton',
  component: GoogleAuthButton,
}

export default meta
type Story = StoryObj<typeof GoogleAuthButton>

export const Primary: Story = {}
