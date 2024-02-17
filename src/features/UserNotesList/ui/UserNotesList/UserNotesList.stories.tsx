import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { type UserNotesListElement } from '../../model/types/NotesListSchema'
import { UserNotesList } from './UserNotesList'

//  TODO: мокать все запросы которые отправляются на сервер

const mockNoteCard: UserNotesListElement = {
  title: 'Тестовая карточка',
  code: 'test',
  id: 1,
  description: 'Тестовые данные',
  createdAt: String(new Date(0).valueOf()),
  category: {
    code: 'test',
    name: 'Категория',
  },
}

const meta: Meta<typeof UserNotesList> = {
  title: 'features/UserNotesList',
  component: UserNotesList,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof UserNotesList>

export const Primary: Story = {
  decorators: [
    StoreDecorator({}),
  ],
  parameters: {
    mockData: [
      {
        url: `${__API__}notes/notes-details/user`,
        method: 'GET',
        status: 200,
        response: {
          success: [
            mockNoteCard,
            mockNoteCard,
            mockNoteCard,
            mockNoteCard,
            mockNoteCard,
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
        url: `${__API__}notes/notes-details/user`,
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
        url: `${__API__}notes/notes-details/user`,
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
