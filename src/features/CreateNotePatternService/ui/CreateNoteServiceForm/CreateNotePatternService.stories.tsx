import { StoreDecorator, WrapperDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { VStack } from '@ui-kit/Stack'
import {
  type CreateNotePatternServiceSchema,
} from '../../model/types/CreateNotePatternServiceSchema'
import { CreateNotePatternService } from './CreateNotePatternService'

const meta: Meta<typeof CreateNotePatternService> = {
  title: 'features/CreateNotePatternService',
  component: CreateNotePatternService,
  tags: ['autodocs'],
}

const values: CreateNotePatternServiceSchema['values'] = {
  linkService: '',
}

export default meta
type Story = StoryObj<typeof CreateNotePatternService>

export const Primary: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      createNotePatternService: {
        values,
      },
    }),
  ],
}

export const IsLoading: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      createNotePatternService: {
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
      createNotePatternService: {
        values,
        validation: {
          linkService: 'Валидация',
        },
      },
    }),
  ],
}
