import { StoreDecorator } from '@config/storybook'
import { type TagsListElement } from '@entities/Tag'
import type { Meta, StoryObj } from '@storybook/react'
import { CategoriesListApi } from './CategoriesListApi'

//  TODO: мокать все запросы которые отправляются на сервер

const mockTagCard: TagsListElement = {
  code: 'test',
  id: 1,
  createdAt: String(new Date(0).valueOf()),
  name: 'Тестовый тег',
  draft: false,
}

const meta: Meta<typeof CategoriesListApi> = {
  title: 'features/CategoriesListApi',
  component: CategoriesListApi,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CategoriesListApi>

export const Primary: Story = {
  decorators: [
    StoreDecorator({}),
  ],
  parameters: {
    mockData: [
      {
        url: `${__API__}tag/all`,
        method: 'GET',
        status: 200,
        response: {
          success: [
            mockTagCard,
            mockTagCard,
            mockTagCard,
            mockTagCard,
            mockTagCard,
          ],
        },
      },
    ],
  },
}

export const NotFound: Story = {
  decorators: [
    StoreDecorator({}),
  ],
  parameters: {
    mockData: [
      {
        url: `${__API__}tag/all`,
        method: 'GET',
        status: 200,
        response: {
          success: [],
        },
      },
    ],
  },
}

export const Loading: Story = {
  decorators: [
    StoreDecorator({}),
  ],
  parameters: {
    mockData: [
      {
        url: `${__API__}tag/all`,
        method: 'GET',
        status: 200,
        response: {
          success: [],
        },
        delay: 99999999999,
      },
    ],
  },
}
