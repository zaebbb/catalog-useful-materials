import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { CreateTagForm } from './CreateTagForm'

const meta: Meta<typeof CreateTagForm> = {
  title: 'features/CreateTagForm',
  component: CreateTagForm,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof CreateTagForm>

export const Primary: Story = {}
