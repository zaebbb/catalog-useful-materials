import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { UserLoginForm } from './UserLoginForm'

const meta: Meta<typeof UserLoginForm> = {
  title: 'features/UserLoginForm',
  component: UserLoginForm,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof UserLoginForm>

export const UserLoginFormPrimary: Story = {
  decorators: [
    StoreDecorator({
      userLoginForm: {
        email: 'Тест',
        password: 'Тест',
      },
      googleAuth: {
        token: 'test',
        mode: 'login',
        user: {},
      },
    }),
  ],
}

export const UserLoginFormIsLoading: Story = {
  decorators: [
    StoreDecorator({
      userLoginForm: {
        email: 'Тест',
        password: 'Тест',
        isLoading: true,
      },
      googleAuth: {
        token: 'test',
        mode: 'login',
        user: {},
      },
    }),
  ],
}

export const UserLoginFormValidation: Story = {
  decorators: [
    StoreDecorator({
      userLoginForm: {
        email: 'Тест',
        password: 'Тест',
        validation: {
          email: 'Error',
          password: 'Error',
          auth: 'error',
        },
      },
      googleAuth: {
        token: 'test',
        mode: 'login',
        user: {},
      },
    }),
  ],
}
