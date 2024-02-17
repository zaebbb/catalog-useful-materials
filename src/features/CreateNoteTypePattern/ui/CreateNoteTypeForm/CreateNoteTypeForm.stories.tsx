import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { CreateNoteTypeForm } from './CreateNoteTypeForm'

const meta: Meta<typeof CreateNoteTypeForm> = {
  title: 'features/CreateNoteTypePattern/CreateNoteTypeForm',
  component: CreateNoteTypeForm,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof CreateNoteTypeForm>

export const Primary: Story = {}
