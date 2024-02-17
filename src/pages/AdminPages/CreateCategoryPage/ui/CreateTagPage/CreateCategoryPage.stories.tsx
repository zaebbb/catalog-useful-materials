import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import CreateCategoryPage from './CreateCategoryPage'

const meta: Meta<typeof CreateCategoryPage> = {
  title: 'pages/CreateCategoryPage',
  component: CreateCategoryPage,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof CreateCategoryPage>

export const Primary: Story = {}
