import type { Meta, StoryObj } from '@storybook/react'
import { SelectNotesViews } from './SelectNotesViews'

const meta: Meta<typeof SelectNotesViews> = {
  title: 'entities/SelectNotesViews',
  component: SelectNotesViews,
}

export default meta
type Story = StoryObj<typeof SelectNotesViews>

export const Primary: Story = {}
