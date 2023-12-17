import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { ProfileSidebar } from './ProfileSidebar'

const meta: Meta<typeof ProfileSidebar> = {
  title: 'widgets/ProfileSidebar/ProfileSidebar',
  component: ProfileSidebar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProfileSidebar>

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
