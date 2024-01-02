import { StoreDecorator, WrapperDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { VStack } from '@ui-kit/Stack'
import { type CreateNotePatternIssueSchema } from '../../model/types/CreateNotePatternIssueSchema'
import { CreateNotePatternIssue } from './CreateNotePatternIssue'

const meta: Meta<typeof CreateNotePatternIssue> = {
  title: 'features/CreateNotePatternIssue',
  component: CreateNotePatternIssue,
  tags: ['autodocs'],
}

const valuesLink: CreateNotePatternIssueSchema['values'] = {
  linkIssue: '',
  isLinkView: true,
  isImageView: false,
}

const valuesFile: CreateNotePatternIssueSchema['values'] = {
  linkIssue: '',
  isLinkView: false,
  isImageView: true,
}

export default meta
type Story = StoryObj<typeof CreateNotePatternIssue>

export const PrimaryFile: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      createNotePatternIssue: {
        values: valuesFile,
      },
    }),
  ],
}

export const IsLoadingFile: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      createNotePatternIssue: {
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
      createNotePatternIssue: {
        values: valuesFile,
        validation: {
          linkIssue: 'Валидация',
          imageIssue: 'Валидация',
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
      createNotePatternIssue: {
        values: valuesLink,
      },
    }),
  ],
}

export const IsLoadingLink: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      createNotePatternIssue: {
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
      createNotePatternIssue: {
        values: valuesLink,
        validation: {
          linkIssue: 'Валидация',
          imageIssue: 'Валидация',
          isLinkView: 'Валидация',
        },
      },
    }),
  ],
}
