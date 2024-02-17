import { StoreDecorator, WrapperDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { VStack } from '@ui-kit/Stack'
import { type NotePatternCourseSchema } from '../../model/types/NotePatternCourseSchema'
import { NotePatternCourseForm } from './NotePatternCourseForm'

const meta: Meta<typeof NotePatternCourseForm> = {
  title: 'features/NotePatternCourseForm',
  component: NotePatternCourseForm,
  tags: ['autodocs'],
}

const values: NotePatternCourseSchema['values'] = {
  linkCourse: '',
  authorCourse: '',
}

export default meta
type Story = StoryObj<typeof NotePatternCourseForm>

export const Primary: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternCourse: {
        values,
      },
    }),
  ],
}

export const IsLoading: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternCourse: {
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
      notePatternCourse: {
        values,
        validation: {
          linkCourse: 'Валидация',
          authorCourse: 'Валидация',
        },
      },
    }),
  ],
}
