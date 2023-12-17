import type { Meta, StoryObj } from '@storybook/react'
import { SelectFieldBase } from './SelectFieldBase'

const items: SelectItems<string> = [
  { id: 1, content: 'Разработка', code: 'dev' },
  { id: 2, content: 'Дизайн', code: 'design' },
  { id: 3, content: 'Маркетинг', code: 'seo' },
  { id: 4, content: 'Маркетинг 1', code: 'seo2' },
  { id: 5, content: 'Маркетинг 2', code: 'seo-1' },
  { id: 6, content: 'Маркетин 3г', code: 'seo3' },
  { id: 7, content: 'Маркетинг 4', code: 'seo84' },
  { id: 8, content: 'Маркетинг 5', code: 'seo7' },
  { id: 9, content: 'Маркетинг 6', code: 'seo6' },
  { id: 10, content: 'Маркетинг 7', code: 'seo5' },
]

const meta: Meta<typeof SelectFieldBase> = {
  title: 'ui-kit/SelectField/SelectFieldBase',
  component: SelectFieldBase,
  tags: ['autodocs'],
  args: {
    items,
    placeholder: 'Выберите из списка',
    label: 'Деятельность',
    searchPlaceholder: 'Введите значение для поиска',
  },
}

export default meta
type Story = StoryObj<typeof SelectFieldBase>

export const Primary: Story = {}

export const BorderMedium: Story = { args: { borderSize: 'medium' } }

export const ErrorField: Story = { args: { validation: 'Тестирование ошибки' } }
export const SuccessField: Story = { args: { success: 'Тестирование успеха' } }
export const FieldReadonly: Story = { args: { isReadonly: true } }
export const FieldIsMax: Story = { args: { isMax: true } }
export const FieldLoading: Story = { args: { isLoading: true } }
export const FieldIsMultiple: Story = { args: { isMultiple: true } }
export const FieldNoSearch: Story = { args: { isSearch: false } }

export const FieldDescription: Story = {
  args: {
    description: 'Тестовая подсказка',
  },
}
