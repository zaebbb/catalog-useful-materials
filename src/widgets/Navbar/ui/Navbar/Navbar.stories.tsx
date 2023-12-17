import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar/Navbar',
  tags: ['autodocs'],
  component: Navbar,
}

export default meta
type Story = StoryObj<typeof Navbar>

export const NavbarAuthPrimary: Story = {
  decorators: [
    StoreDecorator({
      user: {
        _mounted: true,
        user: {
          email: 'email@gmail.com',
          username: 'test',
        },
      },
    }),
  ],
}

export const NavbarNotAuthPrimary: Story = {
  decorators: [
    StoreDecorator({
      user: {
        _mounted: false,
      },
    }),
  ],
}
