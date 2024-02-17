import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { SelectNotesViews } from './SelectNotesViews'

const meta: Meta<typeof SelectNotesViews> = {
  title: 'entities/NotesViews/SelectNotesViews',
  component: SelectNotesViews,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({
      notesViews: {},
    }),
  ],
}

export default meta
type Story = StoryObj<typeof SelectNotesViews>

export const Primary: Story = {}
export const IsLoading: Story = { args: { isLoading: true } }
export const Validation: Story = { args: { validation: 'Валидация' } }
