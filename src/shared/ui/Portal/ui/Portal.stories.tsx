import type { Meta, StoryObj } from '@storybook/react'
import { Portal } from './Portal'

const meta: Meta<typeof Portal> = {
  title: 'ui-kit/Portal',
  component: Portal,
}

export default meta
type Story = StoryObj<typeof Portal>

export const Primary: Story = {
  args: {
    children: <p>Тест портала</p>,
  },
}
