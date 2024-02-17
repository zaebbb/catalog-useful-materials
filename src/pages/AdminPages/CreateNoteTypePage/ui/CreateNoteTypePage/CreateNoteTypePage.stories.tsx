import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import CreateNoteTypePage from './CreateNoteTypePage'

const meta: Meta<typeof CreateNoteTypePage> = {
  title: 'pages/CreateNoteTypePage',
  component: CreateNoteTypePage,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof CreateNoteTypePage>

export const Primary: Story = {}
