import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { SelectTags } from './SelectTags'

const meta: Meta<typeof SelectTags> = {
  title: 'entities/SelectTags',
  component: SelectTags,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({
      tag: {
        select: {},
      },
    }),
  ],
}

export default meta
type Story = StoryObj<typeof SelectTags>

export const Primary: Story = {}
export const IsLoading: Story = { args: { isLoading: true } }
export const Validation: Story = { args: { validation: 'Валидация' } }
