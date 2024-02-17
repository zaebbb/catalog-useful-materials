import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { EditTagForm } from './EditTagForm'

const meta: Meta<typeof EditTagForm> = {
  title: 'features/EditTagForm',
  component: EditTagForm,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof EditTagForm>

export const Primary: Story = {}
