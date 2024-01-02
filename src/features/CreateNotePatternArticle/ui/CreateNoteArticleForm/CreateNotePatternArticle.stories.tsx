import { StoreDecorator, WrapperDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { VStack } from '@ui-kit/Stack'
import {
  type CreateNotePatternArticleSchema,
} from '../../model/types/CreateNotePatternArticleSchema'
import { CreateNotePatternArticle } from './CreateNotePatternArticle'

const values: CreateNotePatternArticleSchema['values'] = {
  linkVideo: '',
  linkNote: '',
  isImageParse: false,
}

const meta: Meta<typeof CreateNotePatternArticle> = {
  title: 'features/CreateNotePatternArticle',
  component: CreateNotePatternArticle,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CreateNotePatternArticle>

export const Primary: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      createNotePatternArticle: {
        values,
      },
    }),
  ],
}

export const IsLoading: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      createNotePatternArticle: {
        values,
        isLoading: true,
      },
    }),
  ],
}

export const Validation: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      createNotePatternArticle: {
        values,
        validation: {
          linkVideo: 'Валидация',
          linkNote: 'Валидация',
          image: 'Валидация',
        },
      },
    }),
  ],
}
