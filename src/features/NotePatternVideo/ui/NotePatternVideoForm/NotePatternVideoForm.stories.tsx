import { StoreDecorator, WrapperDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { VStack } from '@ui-kit/Stack'
import { type NotePatternVideoSchema } from '../../model/types/NotePatternVideoSchema'
import { NotePatternVideoForm } from './NotePatternVideoForm'

const meta: Meta<typeof NotePatternVideoForm> = {
  title: 'features/NotePatternVideoForm',
  component: NotePatternVideoForm,
  tags: ['autodocs'],
}

const values: NotePatternVideoSchema['values'] = {
  linkVideo: '',
}

export default meta
type Story = StoryObj<typeof NotePatternVideoForm>

export const Primary: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternVideo: {
        values,
      },
    }),
  ],
}

export const IsLoading: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternVideo: {
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
      notePatternVideo: {
        values,
        validation: {
          linkVideo: 'Валидация',
        },
      },
    }),
  ],
}
