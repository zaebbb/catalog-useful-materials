import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { CreateCategoryForm } from './CreateCategoryForm'

const meta: Meta<typeof CreateCategoryForm> = {
  title: 'features/CreateCategoryForm',
  component: CreateCategoryForm,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof CreateCategoryForm>

export const Primary: Story = {}
