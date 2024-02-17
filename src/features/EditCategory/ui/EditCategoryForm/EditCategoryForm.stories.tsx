import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { EditCategoryForm } from './EditCategoryForm'

const meta: Meta<typeof EditCategoryForm> = {
  title: 'features/EditCategoryForm',
  component: EditCategoryForm,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof EditCategoryForm>

export const Primary: Story = {}
