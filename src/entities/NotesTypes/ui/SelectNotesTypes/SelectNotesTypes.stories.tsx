import type { Meta, StoryObj } from '@storybook/react'
import { SelectNotesTypes } from './SelectNotesTypes'

const meta: Meta<typeof SelectNotesTypes> = {
  title: 'entities/SelectNotesTypes',
  component: SelectNotesTypes,
}

export default meta
type Story = StoryObj<typeof SelectNotesTypes>

export const Primary: Story = {}
