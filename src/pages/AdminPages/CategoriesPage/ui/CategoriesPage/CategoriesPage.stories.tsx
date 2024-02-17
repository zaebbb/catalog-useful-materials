import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import CategoriesPage from './CategoriesPage'

const meta: Meta<typeof CategoriesPage> = {
  title: 'pages/CategoriesPage',
  component: CategoriesPage,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
}

export default meta
type Story = StoryObj<typeof CategoriesPage>

export const Primary: Story = {}
