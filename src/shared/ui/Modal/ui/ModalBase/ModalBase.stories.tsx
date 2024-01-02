import type { Meta, StoryObj } from '@storybook/react'
import { ModalBase } from './ModalBase'

const meta: Meta<typeof ModalBase> = {
  title: 'ui-kit/Modal/ModalBase',
  component: ModalBase,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ModalBase>

export const Primary: Story = {
  args: {
    children: (
      <h1>hello world</h1>
    ),
    isOpen: true,
  },
}
