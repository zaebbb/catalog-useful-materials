import type { Meta, StoryObj } from '@storybook/react'
import { CategoriesList } from './CategoriesList'

const meta: Meta<typeof CategoriesList> = {
  title: 'entities/Category/CategoriesList',
  component: CategoriesList,
  tags: ['autodocs'],
}

const item = {
  code: 'test',
  name: 'test',
  id: 1,
  createdAt: new Date().toString(),
  draft: false,
}

export default meta
type Story = StoryObj<typeof CategoriesList>

export const Primary: Story = {}

export const Loading: Story = {
  args: {
    isLoading: true,
  },
}

export const Items: Story = {
  args: {
    categories: Array(10).fill('').map((_, i) => {
      if (i < 5) {
        return {
          ...item,
          id: i,
          draft: true,
        }
      }

      return {
        ...item,
        id: i,
        draft: false,
      }
    }),
  },
}
