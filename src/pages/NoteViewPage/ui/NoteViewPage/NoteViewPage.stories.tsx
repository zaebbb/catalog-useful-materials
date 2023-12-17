import type { Meta, StoryObj } from '@storybook/react'
import NoteViewPage from './NoteViewPage'

const meta: Meta<typeof NoteViewPage> = {
  title: 'CHANGE/NoteViewPage',
  component: NoteViewPage,
}

export default meta
type Story = StoryObj<typeof NoteViewPage>

export const Primary: Story = {}
