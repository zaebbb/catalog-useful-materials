import { StoreDecorator, WrapperDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { VStack } from '@ui-kit/Stack'
import { type NotePatternCodeSchema } from '../../model/types/NotePatternCodeSchema'
import { NotePatternCodeForm } from './NotePatternCodeForm'

const meta: Meta<typeof NotePatternCodeForm> = {
  title: 'features/NotePatternCodeForm',
  component: NotePatternCodeForm,
  tags: ['autodocs'],
}

const values: NotePatternCodeSchema['values'] = {
  code: '',
}

export default meta
type Story = StoryObj<typeof NotePatternCodeForm>

export const Primary: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternCode: {
        values,
      },
    }),
  ],
}

export const IsLoading: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternCode: {
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
      notePatternCode: {
        values,
        validation: {
          code: 'Валидация',
        },
      },
    }),
  ],
}
