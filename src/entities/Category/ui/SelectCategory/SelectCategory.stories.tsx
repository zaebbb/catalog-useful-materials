import type { Meta, StoryObj } from '@storybook/react'
import { SelectCategory } from './SelectCategory'

const meta: Meta<typeof SelectCategory> = {
  title: 'entities/SelectCategory',
  component: SelectCategory,
}

export default meta
type Story = StoryObj<typeof SelectCategory>

export const Primary: Story = {}
