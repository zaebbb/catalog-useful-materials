import { StoreDecorator, WrapperDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { VStack } from '@ui-kit/Stack'
import { type CreateNotePatternBookSchema } from '../../model/types/CreateNotePatternBookSchema'
import { CreateNotePatternBook } from './CreateNotePatternBook'

const meta: Meta<typeof CreateNotePatternBook> = {
  title: 'features/CreateNotePatternBook',
  component: CreateNotePatternBook,
  tags: ['autodocs'],
}

const valuesFile: CreateNotePatternBookSchema['values'] = {
  linkBook: '',
  isFileView: true,
  isLinkView: false,
}

const valuesLink: CreateNotePatternBookSchema['values'] = {
  linkBook: '',
  isFileView: false,
  isLinkView: true,
}

export default meta
type Story = StoryObj<typeof CreateNotePatternBook>

export const PrimaryFile: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      createNotePatternBook: {
        values: valuesFile,
      },
    }),
  ],
}

export const IsLoadingFile: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      createNotePatternBook: {
        values: valuesFile,
        isLoading: true,
      },
    }),
  ],
}

export const ValidationFile: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      createNotePatternBook: {
        values: valuesFile,
        validation: {
          linkBook: 'Валидация',
          fileBook: 'Валидация',
          isLinkView: 'Валидация',
        },
      },
    }),
  ],
}

export const PrimaryLink: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      createNotePatternBook: {
        values: valuesLink,
      },
    }),
  ],
}

export const IsLoadingLink: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      createNotePatternBook: {
        values: valuesLink,
        isLoading: true,
      },
    }),
  ],
}

export const ValidationLink: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      createNotePatternBook: {
        values: valuesLink,
        validation: {
          linkBook: 'Валидация',
          fileBook: 'Валидация',
          isLinkView: 'Валидация',
        },
      },
    }),
  ],
}
