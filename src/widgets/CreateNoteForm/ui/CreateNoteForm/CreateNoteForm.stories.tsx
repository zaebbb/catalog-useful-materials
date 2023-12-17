import type { Meta, StoryObj } from '@storybook/react'
import { CreateNoteForm } from './CreateNoteForm'

const meta: Meta<typeof CreateNoteForm> = {
  title: 'CHANGE/CreateNoteForm',
  component: CreateNoteForm,
}

export default meta
type Story = StoryObj<typeof CreateNoteForm>

export const Primary: Story = {}
