import type { Meta, StoryObj } from '@storybook/react'
import { noteListItem } from '../../lib/const/storybookDatas'
import { NotesList } from './NotesList'

const meta: Meta<typeof NotesList> = {
  title: 'entities/NotesList',
  component: NotesList,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof NotesList>

export const Primary: Story = {
  args: { notes: Array(10).fill('').map(() => noteListItem) },
}

export const IsLoading: Story = {
  args: { isLoading: true },
}

export const NotNotes: Story = {
  args: { notes: [] },
}
