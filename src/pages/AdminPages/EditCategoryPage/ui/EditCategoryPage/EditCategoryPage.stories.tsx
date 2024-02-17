import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import EditCategoryPage from './EditCategoryPage'

const meta: Meta<typeof EditCategoryPage> = {
  title: 'pages/EditCategoryPage',
  component: EditCategoryPage,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof EditCategoryPage>

export const Primary: Story = {}
