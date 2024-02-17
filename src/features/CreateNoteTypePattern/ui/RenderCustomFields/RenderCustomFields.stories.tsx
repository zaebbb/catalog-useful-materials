import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { RenderCustomFields } from './RenderCustomFields'

const meta: Meta<typeof RenderCustomFields> = {
  title: 'features/CreateNoteTypePattern/RenderCustomFields',
  component: RenderCustomFields,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof RenderCustomFields>

export const Primary: Story = {}
