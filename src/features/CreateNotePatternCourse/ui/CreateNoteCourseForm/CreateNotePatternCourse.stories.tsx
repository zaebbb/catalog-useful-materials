import { StoreDecorator, WrapperDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { VStack } from '@ui-kit/Stack'
import { type CreateNotePatternCourseSchema } from '../../model/types/CreateNotePatternCourseSchema'
import { CreateNotePatternCourse } from './CreateNotePatternCourse'

const meta: Meta<typeof CreateNotePatternCourse> = {
  title: 'features/CreateNotePatternCourse',
  component: CreateNotePatternCourse,
  tags: ['autodocs'],
}

const values: CreateNotePatternCourseSchema['values'] = {
  linkCourse: '',
  authorCourse: '',
}

export default meta
type Story = StoryObj<typeof CreateNotePatternCourse>

export const Primary: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      createNotePatternCourse: {
        values,
      },
    }),
  ],
}

export const IsLoading: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      createNotePatternCourse: {
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
      createNotePatternCourse: {
        values,
        validation: {
          linkCourse: 'Валидация',
          authorCourse: 'Валидация',
        },
      },
    }),
  ],
}
