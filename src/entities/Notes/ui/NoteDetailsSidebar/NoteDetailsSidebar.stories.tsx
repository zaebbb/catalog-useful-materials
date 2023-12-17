import type { Meta, StoryObj } from '@storybook/react'
import { NoteDetailsSidebar } from './NoteDetailsSidebar'

const meta: Meta<typeof NoteDetailsSidebar> = {
  title: 'CHANGE/NoteDetailsSidebar',
  component: NoteDetailsSidebar,
}

export default meta
type Story = StoryObj<typeof NoteDetailsSidebar>

export const Primary: Story = {}
