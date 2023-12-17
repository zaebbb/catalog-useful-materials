import type { Meta, StoryObj } from '@storybook/react'
import { NotesDetails } from './NotesDetails'

const meta: Meta<typeof NotesDetails> = {
  title: 'CHANGE/NotesDetails',
  component: NotesDetails,
}

export default meta
type Story = StoryObj<typeof NotesDetails>

export const Primary: Story = {}
