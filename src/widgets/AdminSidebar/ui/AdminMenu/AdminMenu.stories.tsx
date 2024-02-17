import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { AdminMenu } from './AdminMenu'

const meta: Meta<typeof AdminMenu> = {
  title: 'widgets/AdminSidebar/AdminMenu',
  component: AdminMenu,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof AdminMenu>

export const Primary: Story = {}
