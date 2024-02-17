import type { Meta, StoryObj } from '@storybook/react'
import { CategoryForm } from './CategoryForm'

const meta: Meta<typeof CategoryForm> = {
  title: 'entities/Category/CategoryForm',
  component: CategoryForm,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CategoryForm>

export const Primary: Story = {}
