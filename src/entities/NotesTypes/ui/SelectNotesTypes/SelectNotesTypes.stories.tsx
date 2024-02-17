import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { SelectNotesTypes } from './SelectNotesTypes'

const meta: Meta<typeof SelectNotesTypes> = {
  title: 'entities/NotesTypes/SelectNotesTypes',
  component: SelectNotesTypes,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SelectNotesTypes>

export const Primary: Story = {
  decorators: [
    StoreDecorator({
      notesTypes: {},
    }),
  ],
}

export const IsLoading: Story = {
  decorators: [
    StoreDecorator({
      notesTypes: { isLoading: true },
      noteBaseField: {},
    }),
  ],
}

export const Validation: Story = {
  decorators: [
    StoreDecorator({
      notesTypes: { validation: 'Валидация' },
      noteBaseField: {},
    }),
  ],
}
