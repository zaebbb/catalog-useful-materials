import type { Meta, StoryObj } from '@storybook/react'
import { SelectTags } from './SelectTags'

const meta: Meta<typeof SelectTags> = {
  title: 'entities/SelectTags',
  component: SelectTags,
}

export default meta
type Story = StoryObj<typeof SelectTags>

export const Primary: Story = {}
