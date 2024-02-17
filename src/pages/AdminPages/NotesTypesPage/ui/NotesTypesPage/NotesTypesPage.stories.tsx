import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import NotesTypesPage from './NotesTypesPage'

const meta: Meta<typeof NotesTypesPage> = {
  title: 'pages/NotesTypesPage',
  component: NotesTypesPage,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof NotesTypesPage>

export const Primary: Story = {}
