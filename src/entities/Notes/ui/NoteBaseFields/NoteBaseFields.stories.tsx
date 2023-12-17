import type { Meta, StoryObj } from '@storybook/react'
import { NoteBaseFields } from './NoteBaseFields'

const meta: Meta<typeof NoteBaseFields> = {
  title: 'features/NoteBaseFields',
  component: NoteBaseFields,
}

export default meta
type Story = StoryObj<typeof NoteBaseFields>

export const Primary: Story = {}
