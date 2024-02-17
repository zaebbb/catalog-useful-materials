import { StoreDecorator, WrapperDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { VStack } from '@ui-kit/Stack'
import {
  type NotePatternArticleSchema,
} from '../../model/types/NotePatternArticleSchema'
import { NotePatternArticleForm } from './NotePatternArticleForm'

const values: NotePatternArticleSchema['values'] = {
  linkVideo: '',
  linkNote: '',
  isImageParse: false,
}

const meta: Meta<typeof NotePatternArticleForm> = {
  title: 'features/NotePatternArticleForm',
  component: NotePatternArticleForm,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof NotePatternArticleForm>

export const Primary: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternArticle: {
        values,
        editValues: {
          image: '',
        },
      },
    }),
  ],
}

export const IsLoading: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternArticle: {
        values,
        isLoading: true,
        editValues: {
          image: '',
        },
      },
    }),
  ],
}

export const Validation: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternArticle: {
        values,
        validation: {
          linkVideo: 'Валидация',
          linkNote: 'Валидация',
          image: 'Валидация',
        },
        editValues: {
          image: '',
        },
      },
    }),
  ],
}
