import { StoreDecorator, WrapperDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { VStack } from '@ui-kit/Stack'
import { type CreateNotePatternCodeSchema } from '../../model/types/CreateNotePatternCodeSchema'
import { CreateNotePatternCode } from './CreateNotePatternCode'

const meta: Meta<typeof CreateNotePatternCode> = {
  title: 'features/CreateNotePatternCode',
  component: CreateNotePatternCode,
  tags: ['autodocs'],
}

const values: CreateNotePatternCodeSchema['values'] = {
  code: '',
}

export default meta
type Story = StoryObj<typeof CreateNotePatternCode>

export const Primary: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      createNotePatternCode: {
        values,
      },
    }),
  ],
}

export const IsLoading: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      createNotePatternCode: {
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
      createNotePatternCode: {
        values,
        validation: {
          code: 'Валидация',
        },
      },
    }),
  ],
}
