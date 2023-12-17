import type { Meta, StoryObj } from '@storybook/react'
import TextareaFieldBase from './TextareaFieldBase'

const defaultProps = {
  label: 'Тест',
  placeholder: 'Тест',
  height: 200,
}

const meta: Meta<typeof TextareaFieldBase> = {
  title: 'ui-kit/TextareaFieldBase',
  component: TextareaFieldBase,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
}

export default meta
type Story = StoryObj<typeof TextareaFieldBase>

export const Primary: Story = {}

export const PrimaryCode: Story = {
  args: {
    mode: 'code',
  },
}

export const PrimaryClear: Story = {
  args: {
    mode: 'clear',
  },
}

export const ErrorField: Story = {
  args: {
    validation: 'Тестирование ошибки',
  },
}

export const SuccessField: Story = {
  args: {
    success: 'Тестирование успеха',
  },
}

export const LoadingField: Story = {
  args: {
    isLoading: true,
  },
}

export const ReadonlyField: Story = {
  args: {
    isReadonly: true,
  },
}

export const FieldDescription: Story = {
  args: {
    ...defaultProps,
    description: 'Тестовая подсказка',
  },
}
