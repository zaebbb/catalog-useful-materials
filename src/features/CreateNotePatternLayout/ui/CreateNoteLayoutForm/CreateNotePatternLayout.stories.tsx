import { StoreDecorator, WrapperDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { VStack } from '@ui-kit/Stack'
import { type CreateNotePatternLayoutSchema } from '../../model/types/CreateNotePatternLayoutSchema'
import { CreateNotePatternLayout } from './CreateNotePatternLayout'

const meta: Meta<typeof CreateNotePatternLayout> = {
  title: 'features/CreateNotePatternLayout',
  component: CreateNotePatternLayout,
  tags: ['autodocs'],
}

const values: CreateNotePatternLayoutSchema['values'] = {
  linkLayout: '',
}

export default meta
type Story = StoryObj<typeof CreateNotePatternLayout>

export const Primary: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      createNotePatternLayout: {
        values,
      },
    }),
  ],
}

export const IsLoading: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      createNotePatternLayout: {
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
      createNotePatternLayout: {
        values,
        validation: {
          linkLayout: 'Валидация',
          imageLayout: 'Валидация',
        },
      },
    }),
  ],
}
