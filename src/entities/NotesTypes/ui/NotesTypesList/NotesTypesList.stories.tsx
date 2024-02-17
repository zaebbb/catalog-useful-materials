import { NotesTypesCodeList } from '@entities/NotesTypes'
import type { Meta, StoryObj } from '@storybook/react'
import { NotesTypesList } from './NotesTypesList'

const meta: Meta<typeof NotesTypesList> = {
  title: 'entities/NotesTypes/NotesTypesList',
  component: NotesTypesList,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof NotesTypesList>

export const Primary: Story = {}
export const Loading: Story = {
  args: {
    isLoading: true,
  },
}
export const Items: Story = {
  args: {
    notesTypes: Array(10).fill('').map((_, i) => {
      if (i < 5) {
        return {
          code: NotesTypesCodeList.CODE,
          name: 'test',
          id: i,
          createdAt: new Date().toString(),
          draft: false,
          isCustom: true,
        }
      }

      return {
        code: NotesTypesCodeList.CODE,
        name: 'test',
        id: i,
        createdAt: new Date().toString(),
        draft: true,
        isCustom: true,
      }
    }),
  },
}
