import { StoreDecorator, WrapperDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { VStack } from '@ui-kit/Stack'
import {
  type NotePatternServiceSchema,
} from '../../model/types/NotePatternServiceSchema'
import { NotePatternServiceForm } from './NotePatternServiceForm'

const meta: Meta<typeof NotePatternServiceForm> = {
  title: 'features/CreateNotePatternService',
  component: NotePatternServiceForm,
  tags: ['autodocs'],
}

const values: NotePatternServiceSchema['values'] = {
  linkService: '',
}

export default meta
type Story = StoryObj<typeof NotePatternServiceForm>

export const Primary: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternService: {
        values,
      },
    }),
  ],
}

export const IsLoading: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternService: {
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
      notePatternService: {
        values,
        validation: {
          linkService: 'Валидация',
        },
      },
    }),
  ],
}
