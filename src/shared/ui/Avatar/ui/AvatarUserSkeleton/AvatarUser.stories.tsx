import type { Meta, StoryObj } from '@storybook/react'
import { AvatarUserSkeleton } from './AvatarUser.skeleton'

const meta: Meta<typeof AvatarUserSkeleton> = {
  title: 'ui-kit/Avatar/AvatarUserSkeleton',
  component: AvatarUserSkeleton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AvatarUserSkeleton>

export const Primary: Story = {}
export const PrimarySmallLeft: Story = { args: { size: 'small', textAlign: 'left' } }
export const PrimarySmallRight: Story = { args: { size: 'small', textAlign: 'right' } }
export const PrimaryMediumLeft: Story = { args: { size: 'medium', textAlign: 'left' } }
export const PrimaryMediumRight: Story = { args: { size: 'medium', textAlign: 'right' } }
export const PrimaryLargeLeft: Story = { args: { size: 'large', textAlign: 'left' } }
export const PrimaryLargeRight: Story = { args: { size: 'large', textAlign: 'right' } }
