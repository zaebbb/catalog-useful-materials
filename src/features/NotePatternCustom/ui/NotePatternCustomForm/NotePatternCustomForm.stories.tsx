import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { NotePatternCustomForm } from './NotePatternCustomForm'

const meta: Meta<typeof NotePatternCustomForm> = {
  title: 'features/NotePatternCustom/NotePatternCustomForm',
  component: NotePatternCustomForm,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof NotePatternCustomForm>

export const Primary: Story = {}
