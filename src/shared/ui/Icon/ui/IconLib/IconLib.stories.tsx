import type { Meta, StoryObj } from '@storybook/react'
import { IconLib } from './IconLib'

const meta: Meta<typeof IconLib> = {
  title: 'ui-kit/icon/IconLib',
  tags: ['autodocs'],
  component: IconLib,
}

export default meta
type Story = StoryObj<typeof IconLib>

export const Primary: Story = {
  args: {
    Icon: 'IconFaBeer',
  },
}
