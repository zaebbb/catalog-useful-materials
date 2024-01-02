import type { Meta, StoryObj } from '@storybook/react'
import { UserRegisterForm } from './UserRegisterForm'

const meta: Meta<typeof UserRegisterForm> = {
  title: 'CHANGE/UserRegisterForm',
  component: UserRegisterForm,
}

export default meta
type Story = StoryObj<typeof UserRegisterForm>

export const Primary: Story = {}
