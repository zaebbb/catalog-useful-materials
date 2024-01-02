import { StoreDecorator, WrapperDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { VStack } from '@ui-kit/Stack'
import {
  type CreateNotePatternTechnologySchema,
} from '../../model/types/CreateNotePatternTechnologySchema'
import { CreateNotePatternTechnology } from './CreateNotePatternTechnology'

const meta: Meta<typeof CreateNotePatternTechnology> = {
  title: 'features/CreateNotePatternTechnology',
  component: CreateNotePatternTechnology,
  tags: ['autodocs'],
}

const values: CreateNotePatternTechnologySchema['values'] = {
  linkTechnology: '',
  linkInstall: '',
  linkDocs: '',
}

export default meta
type Story = StoryObj<typeof CreateNotePatternTechnology>

export const Primary: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      createNotePatternTechnology: {
        values,
      },
    }),
  ],
}

export const IsLoading: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      createNotePatternTechnology: {
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
      createNotePatternTechnology: {
        values,
        validation: {
          linkTechnology: 'Валидация',
          linkInstall: 'Валидация',
          linkDocs: 'Валидация',
          icon: 'Валидация',
        },
      },
    }),
  ],
}
