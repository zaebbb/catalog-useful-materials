import type { Meta, StoryObj } from '@storybook/react'
import { CheckboxField } from './CheckboxField'

const meta: Meta<typeof CheckboxField> = {
  title: 'ui-kit/CheckboxField',
  component: CheckboxField,
  tags: ['autodocs'],
  args: {
    label: 'Тестовый label',
  },
}

export default meta
type Story = StoryObj<typeof CheckboxField>

export const Primary: Story = {}
export const CheckboxReadonly: Story = { args: { isReadonly: true } }
export const CheckboxLoading: Story = { args: { isLoading: true } }
export const CheckboxRequired: Story = { args: { isRequired: true } }
export const CheckboxError: Story = { args: { validation: 'Тест ошибки' } }
export const CheckboxSuccess: Story = { args: { success: 'Тест успеха' } }

export const CheckboxDescription: Story = {
  args: {
    description: 'Тестовая подсказка',
  },
}
