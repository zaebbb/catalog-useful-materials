import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import EditTagPage from './EditTagPage'

const meta: Meta<typeof EditTagPage> = {
  title: 'pages/EditTagPage',
  component: EditTagPage,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof EditTagPage>

export const Primary: Story = {}
