import { StoreDecorator, WrapperDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { VStack } from '@ui-kit/Stack'
import { type NotePatternIssueSchema } from '../../model/types/NotePatternIssueSchema'
import { NotePatternIssueForm } from './NotePatternIssueForm'

const meta: Meta<typeof NotePatternIssueForm> = {
  title: 'features/NotePatternIssueForm',
  component: NotePatternIssueForm,
  tags: ['autodocs'],
}

const valuesLink: NotePatternIssueSchema['values'] = {
  linkIssue: '',
  isLinkView: true,
  isImageView: false,
}

const valuesFile: NotePatternIssueSchema['values'] = {
  linkIssue: '',
  isLinkView: false,
  isImageView: true,
}

export default meta
type Story = StoryObj<typeof NotePatternIssueForm>

export const PrimaryFile: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternIssue: {
        values: valuesFile,
        editValues: {
          fileImage: '',
        },
      },
    }),
  ],
}

export const IsLoadingFile: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternIssue: {
        values: valuesFile,
        isLoading: true,
        editValues: {
          fileImage: '',
        },
      },
    }),
  ],
}

export const ValidationFile: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternIssue: {
        values: valuesFile,
        validation: {
          linkIssue: 'Валидация',
          imageIssue: 'Валидация',
          isLinkView: 'Валидация',
        },
        editValues: {
          fileImage: '',
        },
      },
    }),
  ],
}

export const PrimaryLink: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternIssue: {
        values: valuesLink,
        editValues: {
          fileImage: '',
        },
      },
    }),
  ],
}

export const IsLoadingLink: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternIssue: {
        values: valuesLink,
        isLoading: true,
        editValues: {
          fileImage: '',
        },
      },
    }),
  ],
}

export const ValidationLink: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternIssue: {
        values: valuesLink,
        validation: {
          linkIssue: 'Валидация',
          imageIssue: 'Валидация',
          isLinkView: 'Валидация',
        },
        editValues: {
          fileImage: '',
        },
      },
    }),
  ],
}
