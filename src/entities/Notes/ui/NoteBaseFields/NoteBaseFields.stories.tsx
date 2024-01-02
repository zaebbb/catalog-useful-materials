import { StoreDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { type NoteBaseFieldsSchema } from '../../model/types/NoteBaseFieldsSchema'
import { NoteBaseFields } from './NoteBaseFields'

const meta: Meta<typeof NoteBaseFields> = {
  title: 'entities/NoteBaseFields',
  component: NoteBaseFields,
  tags: ['autodocs'],
}

const values: NoteBaseFieldsSchema['values'] = {
  draft: false,
  title: '',
  description: '',
}

export default meta
type Story = StoryObj<typeof NoteBaseFields>

export const Primary: Story = {
  decorators: [
    StoreDecorator({ noteBaseField: { values } }),
  ],
}

export const IsLoading: Story = {
  decorators: [
    StoreDecorator({
      noteBaseField: {
        isLoading: true,
        values,
      },
    }),
  ],
}

export const Validation: Story = {
  decorators: [
    StoreDecorator({
      noteBaseField: {
        values,
        validation: {
          title: 'Валидация заголовка',
          viewId: 'Валидация видимости',
          description: 'Валидация описания',
          draft: 'Валидация черновика',
          tagsIds: 'Валидация тегов',
          categoryId: 'Валидация категории',
          typeId: 'Валидация типа',
        },
      },
    }),
  ],
}
