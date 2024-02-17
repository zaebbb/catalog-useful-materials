import Profile from '@assets/icons/Profile.png'
import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'ui-kit/Avatar/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: Profile,
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Primary: Story = {}

export const PrimarySmall: Story = {
  args: {
    size: 'small',
  },
}

export const PrimaryLarge: Story = {
  args: {
    size: 'large',
  },
}
