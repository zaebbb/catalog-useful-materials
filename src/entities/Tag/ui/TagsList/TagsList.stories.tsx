import { generateKey } from '@lib/helpers/generateKey'
import type { Meta, StoryObj } from '@storybook/react'
import { TagsList } from './TagsList'

const meta: Meta<typeof TagsList> = {
  title: 'entities/Tag/TagsList',
  component: TagsList,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TagsList>

export const Primary: Story = {
  args: {
    tags: Array(10).fill('').map(() => ({
      name: 'Тестовый данные',
      code: generateKey(),
      createdAt: String(new Date(0).valueOf()),
      id: 0,
      draft: false,
    })),
  },
}

export const IsLoading: Story = {
  args: { isLoading: true },
}

export const NotTags: Story = {
  args: { tags: [] },
}
