import type { Meta, StoryObj } from '@storybook/react'
import { InputFieldFile } from './InputFieldFile'

const meta: Meta<typeof InputFieldFile> = {
  title: 'ui-kit/InputField/InputFieldFile',
  component: InputFieldFile,
  tags: ['autodocs'],
  args: {
    label: 'Загрузка файлов',
  },
}

export default meta
type Story = StoryObj<typeof InputFieldFile>

export const Primary: Story = {}
export const PrimaryLabel: Story = {}
export const PrimaryMultiple: Story = { args: { isMultiple: true } }
export const FieldError: Story = { args: { validation: 'Тестирование ошибки' } }
export const FieldSuccess: Story = { args: { success: 'Тестирование успеха' } }
export const FieldReadonly: Story = { args: { isReadonly: true } }
export const FieldIsLoading: Story = { args: { isLoading: true } }
export const FieldIsRequired: Story = { args: { isRequired: true } }
