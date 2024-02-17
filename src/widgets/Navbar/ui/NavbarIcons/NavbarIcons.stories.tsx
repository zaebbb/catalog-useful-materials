import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { NavbarIcons } from './NavbarIcons'

const meta: Meta<typeof NavbarIcons> = {
  title: 'widgets/Navbar/NavbarIcons',
  component: NavbarIcons,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof NavbarIcons>

export const Primary: Story = {}
