import type { Meta, StoryObj } from '@storybook/react'
import { AvatarSkeleton } from './Avatar.skeleton'

const meta: Meta<typeof AvatarSkeleton> = {
  title: 'ui-kit/Avatar/AvatarSkeleton',
  component: AvatarSkeleton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AvatarSkeleton>

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
