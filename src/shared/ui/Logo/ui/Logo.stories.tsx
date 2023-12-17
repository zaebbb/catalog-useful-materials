import type { Meta, StoryObj } from '@storybook/react'
import { Logo } from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'ui-kit/Logo',
  tags: ['autodocs'],
  component: Logo,
}

export default meta
type Story = StoryObj<typeof Logo>

export const Primary: Story = {}
