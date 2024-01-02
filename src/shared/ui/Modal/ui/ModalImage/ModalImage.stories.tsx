import TestImage from '@assets/image/test-image.jpg'
import type { Meta, StoryObj } from '@storybook/react'
import { ModalImage } from './ModalImage'

const meta: Meta<typeof ModalImage> = {
  title: 'ui-kit/Modal/ModalImage',
  component: ModalImage,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ModalImage>

export const Primary: Story = {
  args: {
    isOpen: true,
    src: TestImage,
  },
}
