import { StoreDecorator, WrapperDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { VStack } from '@ui-kit/Stack'
import { type CreateNotePatternVideoSchema } from '../../model/types/CreateNotePatternVideoSchema'
import { CreateNotePatternVideo } from './CreateNotePatternVideo'

const meta: Meta<typeof CreateNotePatternVideo> = {
  title: 'features/CreateNotePatternVideo',
  component: CreateNotePatternVideo,
  tags: ['autodocs'],
}

const values: CreateNotePatternVideoSchema['values'] = {
  linkVideo: '',
}

export default meta
type Story = StoryObj<typeof CreateNotePatternVideo>

export const Primary: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      createNotePatternVideo: {
        values,
      },
    }),
  ],
}

export const IsLoading: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      createNotePatternVideo: {
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
      createNotePatternVideo: {
        values,
        validation: {
          linkVideo: 'Валидация',
        },
      },
    }),
  ],
}
