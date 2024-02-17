import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { NoteSearch } from './NoteSearch'

const meta: Meta<typeof NoteSearch> = {
  title: 'features/NoteSearch',
  component: NoteSearch,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof NoteSearch>

export const Primary: Story = {
  decorators: [
    StoreDecorator({}),
  ],
}
