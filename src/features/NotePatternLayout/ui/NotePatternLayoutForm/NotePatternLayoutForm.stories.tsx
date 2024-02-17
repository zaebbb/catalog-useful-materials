import { StoreDecorator, WrapperDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { VStack } from '@ui-kit/Stack'
import { type NotePatternLayoutSchema } from '../../model/types/NotePatternLayoutSchema'
import { NotePatternLayoutForm } from './NotePatternLayoutForm'

const meta: Meta<typeof NotePatternLayoutForm> = {
  title: 'features/NotePatternLayoutForm',
  component: NotePatternLayoutForm,
  tags: ['autodocs'],
}

const values: NotePatternLayoutSchema['values'] = {
  linkLayout: '',
}

export default meta
type Story = StoryObj<typeof NotePatternLayoutForm>

export const Primary: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternLayout: {
        values,
        editValues: {
          imageLayout: '',
        },
      },
    }),
  ],
}

export const IsLoading: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternLayout: {
        values,
        isLoading: true,
        editValues: {
          imageLayout: '',
        },
      },
    }),
  ],
}

export const Validation: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternLayout: {
        values,
        validation: {
          linkLayout: 'Валидация',
          imageLayout: 'Валидация',
        },
        editValues: {
          imageLayout: '',
        },
      },
    }),
  ],
}
