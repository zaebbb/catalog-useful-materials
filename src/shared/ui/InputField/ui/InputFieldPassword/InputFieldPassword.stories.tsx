import type { Meta, StoryObj } from '@storybook/react'
import { InputFieldPassword } from './InputFieldPassword'

const meta: Meta<typeof InputFieldPassword> = {
  title: 'ui-kit/InputField/InputFieldPassword',
  tags: ['autodocs'],
  component: InputFieldPassword,
}

export default meta
type Story = StoryObj<typeof InputFieldPassword>

const defaultProps = {
  label: 'Тест',
  placeholder: 'Тест',
}

export const Primary: Story = {
  args: {
    ...defaultProps,
  },
}
