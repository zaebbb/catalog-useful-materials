import type { Meta, StoryObj } from '@storybook/react'
import { NavItem } from './NavItem'

const meta: Meta<typeof NavItem> = {
  title: 'widgets/Navbar/NavItem',
  tags: ['autodocs'],
  component: NavItem,
}

export default meta
type Story = StoryObj<typeof NavItem>

export const Primary: Story = {}
