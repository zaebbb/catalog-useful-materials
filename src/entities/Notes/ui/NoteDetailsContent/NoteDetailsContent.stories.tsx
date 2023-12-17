import type { Meta, StoryObj } from '@storybook/react'
import { NoteDetailsContent } from './NoteDetailsContent'

const meta: Meta<typeof NoteDetailsContent> = {
  title: 'CHANGE/NoteDetailsContent',
  component: NoteDetailsContent,
}

export default meta
type Story = StoryObj<typeof NoteDetailsContent>

export const Primary: Story = {}
