import Profile from '@assets/icons/Profile.png'
import type { Meta, StoryObj } from '@storybook/react'
import { AvatarUser } from './AvatarUser'

const meta: Meta<typeof AvatarUser> = {
  title: 'ui-kit/Avatar/AvatarUser',
  component: AvatarUser,
  tags: ['autodocs'],
  args: {
    src: Profile,
    username: 'Vladimir',
    content: '@dev-proger',
  },
}

export default meta
type Story = StoryObj<typeof AvatarUser>

export const Primary: Story = {}
export const PrimarySmallLeft: Story = { args: { size: 'small', textAlign: 'left' } }
export const PrimarySmallRight: Story = { args: { size: 'small', textAlign: 'right' } }
export const PrimaryMediumLeft: Story = { args: { size: 'medium', textAlign: 'left' } }
export const PrimaryMediumRight: Story = { args: { size: 'medium', textAlign: 'right' } }
export const PrimaryLargeLeft: Story = { args: { size: 'large', textAlign: 'left' } }
export const PrimaryLargeRight: Story = { args: { size: 'large', textAlign: 'right' } }
