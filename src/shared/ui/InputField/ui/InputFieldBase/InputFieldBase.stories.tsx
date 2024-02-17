import type { Meta, StoryObj } from '@storybook/react'
import { IconLib } from '@ui-kit/Icon'
import { InputFieldBase } from './InputFieldBase'

const meta: Meta<typeof InputFieldBase> = {
  title: 'ui-kit/InputField/InputFieldBase',
  component: InputFieldBase,
  tags: ['autodocs'],
}

const defaultProps = {
  label: 'Тест',
  placeholder: 'Тест',
}

export default meta
type Story = StoryObj<typeof InputFieldBase>

export const Primary: Story = {
  args: {
    ...defaultProps,
  },
}

export const BorderMedium: Story = {
  args: {
    ...defaultProps,
    borderSize: 'medium',
  },
}

export const BorderEmpty: Story = {
  args: {
    ...defaultProps,
    borderSize: 'medium',
    borderColor: 'empty',
  },
}

export const ErrorField: Story = {
  args: {
    ...defaultProps,
    validation: 'Тестирование ошибки',
  },
}

export const ErrorFieldAndDefaultIcon: Story = {
  args: {
    ...defaultProps,
    validation: 'Тестирование ошибки',
    icon: <IconLib Icon={'IconFaBeer'} />,
  },
}

export const SuccessField: Story = {
  args: {
    ...defaultProps,
    success: 'Тестирование успеха',
  },
}

export const FieldReadonly: Story = {
  args: {
    ...defaultProps,
    isReadonly: true,
  },
}

export const FieldReadonlyIcon: Story = {
  args: {
    ...defaultProps,
    isReadonly: true,
    icon: <IconLib Icon={'IconFaBeer'} />,
  },
}

export const FieldIsMax: Story = {
  args: {
    ...defaultProps,
    isMax: true,
  },
}

export const FieldLoading: Story = {
  args: {
    ...defaultProps,
    isLoading: true,
  },
}

export const FieldDescription: Story = {
  args: {
    ...defaultProps,
    description: 'Тестовая подсказка',
  },
}

export const FieldRequired: Story = {
  args: {
    ...defaultProps,
    isRequired: true,
  },
}
