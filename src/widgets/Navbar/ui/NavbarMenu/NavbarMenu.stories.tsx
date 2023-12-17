import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { NavbarMenu } from './NavbarMenu'

const meta: Meta<typeof NavbarMenu> = {
  title: 'widgets/Navbar/NavbarIMenu',
  tags: ['autodocs'],
  component: NavbarMenu,
}

export default meta
type Story = StoryObj<typeof NavbarMenu>

export const NavbarMenuAuthPrimary: Story = {
  decorators: [
    StoreDecorator({
      user: {
        _mounted: true,
      },
    }),
  ],
}

export const NavbarMenuNotAuthPrimary: Story = {
  decorators: [
    StoreDecorator({
      user: {
        _mounted: false,
      },
    }),
  ],
}
