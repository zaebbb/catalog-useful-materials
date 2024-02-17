import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { CreateNoteTypeFieldForm } from './CreateNoteTypeFieldForm'

const meta: Meta<typeof CreateNoteTypeFieldForm> = {
  title: 'features/CreateNoteTypePattern/CreateNoteTypeFieldForm',
  component: CreateNoteTypeFieldForm,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof CreateNoteTypeFieldForm>

export const Primary: Story = {}
