import type { Meta, StoryObj } from '@storybook/react'
import { AppLink } from './AppLink'

const meta: Meta<typeof AppLink> = {
  title: 'ui-kit/AppLink',
  component: AppLink,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AppLink>

export const Primary: Story = {}
