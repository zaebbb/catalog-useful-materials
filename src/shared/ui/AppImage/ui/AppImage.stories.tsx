import TestImage from '@assets/image/test-image.jpg'
import type { Meta, StoryObj } from '@storybook/react'
import { AppImage } from './AppImage'

const meta: Meta<typeof AppImage> = {
  title: 'ui-kit/AppImage',
  component: AppImage,
  args: {
    src: TestImage,
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AppImage>

export const Primary: Story = {}
export const PrimaryMax: Story = { args: { isMax: true } }
