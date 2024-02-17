import { StoreDecorator, WrapperDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { VStack } from '@ui-kit/Stack'
import { type NotePatternBookSchema } from '../../model/types/NotePatternBookSchema'
import { NotePatternBookForm } from './NotePatternBookForm'

const meta: Meta<typeof NotePatternBookForm> = {
  title: 'features/NotePatternBookForm',
  component: NotePatternBookForm,
  tags: ['autodocs'],
}

const valuesFile: NotePatternBookSchema['values'] = {
  linkBook: '',
  isFileView: true,
  isLinkView: false,
}

const valuesLink: NotePatternBookSchema['values'] = {
  linkBook: '',
  isFileView: false,
  isLinkView: true,
}

export default meta
type Story = StoryObj<typeof NotePatternBookForm>

export const PrimaryFile: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternBook: {
        values: valuesFile,
        editValues: {
          fileBook: '',
        },
      },
    }),
  ],
}

export const IsLoadingFile: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternBook: {
        values: valuesFile,
        isLoading: true,
        editValues: {
          fileBook: '',
        },
      },
    }),
  ],
}

export const ValidationFile: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternBook: {
        values: valuesFile,
        validation: {
          linkBook: 'Валидация',
          fileBook: 'Валидация',
          isLinkView: 'Валидация',
        },
        editValues: {
          fileBook: '',
        },
      },
    }),
  ],
}

export const PrimaryLink: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternBook: {
        values: valuesLink,
        editValues: {
          fileBook: '',
        },
      },
    }),
  ],
}

export const IsLoadingLink: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternBook: {
        values: valuesLink,
        isLoading: true,
        editValues: {
          fileBook: '',
        },
      },
    }),
  ],
}

export const ValidationLink: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternBook: {
        values: valuesLink,
        validation: {
          linkBook: 'Валидация',
          fileBook: 'Валидация',
          isLinkView: 'Валидация',
        },
        editValues: {
          fileBook: '',
        },
      },
    }),
  ],
}
