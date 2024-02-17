import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { UserNotesList } from './UserNotesList'

const meta: Meta<typeof UserNotesList> = {
  title: 'widgets/UserNotesList',
  component: UserNotesList,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof UserNotesList>

export const Primary: Story = {}
