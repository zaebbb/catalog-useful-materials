import type { Meta, StoryObj } from '@storybook/react'
import { ProfileMenu } from './ProfileMenu'

const meta: Meta<typeof ProfileMenu> = {
  title: 'widgets/ProfileSidebar/ProfileMenu',
  component: ProfileMenu,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProfileMenu>

export const Primary: Story = {}
