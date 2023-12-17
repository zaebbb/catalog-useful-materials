import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { NavbarUserInfo } from './NavbarUserInfo'

const meta: Meta<typeof NavbarUserInfo> = {
  title: 'widgets/Navbar/NavbarUserInfo',
  component: NavbarUserInfo,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof NavbarUserInfo>

export const Primary: Story = {
  decorators: [
    StoreDecorator({
      user: {
        _mounted: true,
        user: {
          email: 'email@gmail.com',
          username: 'test',
          avatar: '',
        },
      },
    }),
  ],
}
