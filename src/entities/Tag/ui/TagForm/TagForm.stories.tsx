import type { Meta, StoryObj } from '@storybook/react'
import { TagForm } from './TagForm'

const meta: Meta<typeof TagForm> = {
  title: 'entities/Tag/TagForm',
  component: TagForm,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TagForm>

export const Primary: Story = {}

export const Loading: Story = {
  args: {
    isLoading: true,
  },
}
