import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import AdminPage from './AdminPage'

const meta: Meta<typeof AdminPage> = {
  title: 'pages/AdminPage',
  component: AdminPage,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof AdminPage>

export const Primary: Story = {}
