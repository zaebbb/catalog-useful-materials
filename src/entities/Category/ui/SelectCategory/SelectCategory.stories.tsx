import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { SelectCategory } from './SelectCategory'

const meta: Meta<typeof SelectCategory> = {
  title: 'entities/Category/SelectCategory',
  component: SelectCategory,
  tags: ['autodocs'],
  decorators: [StoreDecorator({
    category: {
      select: {
        allCategoriesPath: '',
      },
    },
  })],
}

export default meta
type Story = StoryObj<typeof SelectCategory>

export const Primary: Story = {}

export const PrimaryIsLoading: Story = {
  args: { isLoading: true },
}

export const PrimaryValidation: Story = {
  args: { validation: 'Валидация' },
}
