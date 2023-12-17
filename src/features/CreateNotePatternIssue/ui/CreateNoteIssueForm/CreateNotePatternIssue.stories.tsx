import type { Meta, StoryObj } from '@storybook/react'
import { CreateNotePatternIssue } from './CreateNotePatternIssue'

const meta: Meta<typeof CreateNotePatternIssue> = {
  title: 'features/CreateNotePatternIssue',
  component: CreateNotePatternIssue,
}

export default meta
type Story = StoryObj<typeof CreateNotePatternIssue>

export const Primary: Story = {}
