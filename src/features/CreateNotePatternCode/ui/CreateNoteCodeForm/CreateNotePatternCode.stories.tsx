import type { Meta, StoryObj } from '@storybook/react'
import { CreateNotePatternCode } from './CreateNotePatternCode'

const meta: Meta<typeof CreateNotePatternCode> = {
  title: 'features/CreateNotePatternCode',
  component: CreateNotePatternCode,
}

export default meta
type Story = StoryObj<typeof CreateNotePatternCode>

export const Primary: Story = {}
