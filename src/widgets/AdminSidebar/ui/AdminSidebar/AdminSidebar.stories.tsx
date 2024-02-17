import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { AdminSidebar } from './AdminSidebar'

const meta: Meta<typeof AdminSidebar> = {
  title: 'widgets/AdminSidebar/AdminSidebar',
  component: AdminSidebar,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof AdminSidebar>

export const Primary: Story = {}
