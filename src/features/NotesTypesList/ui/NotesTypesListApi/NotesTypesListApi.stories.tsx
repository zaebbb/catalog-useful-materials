import { StoreDecorator } from '@config/storybook'
import { NotesTypesCodeList, type NotesTypesListElement } from '@entities/NotesTypes'
import type { Meta, StoryObj } from '@storybook/react'
import { NotesTypesListApi } from './NotesTypesListApi'

//  TODO: мокать все запросы которые отправляются на сервер

const mockNoteTypeCard: NotesTypesListElement = {
  code: NotesTypesCodeList.CODE,
  id: 1,
  createdAt: String(new Date(0).valueOf()),
  name: 'Тестовый тег',
  draft: false,
  isCustom: true,
}

const meta: Meta<typeof NotesTypesListApi> = {
  title: 'features/NotesTypesListApi',
  component: NotesTypesListApi,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof NotesTypesListApi>

export const Primary: Story = {
  decorators: [
    StoreDecorator({}),
  ],
  parameters: {
    mockData: [
      {
        url: `${__API__}notes-types/all`,
        method: 'GET',
        status: 200,
        response: {
          success: [
            mockNoteTypeCard,
            mockNoteTypeCard,
            mockNoteTypeCard,
            mockNoteTypeCard,
            mockNoteTypeCard,
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
        url: `${__API__}notes-types/all`,
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
        url: `${__API__}notes-types/all`,
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
