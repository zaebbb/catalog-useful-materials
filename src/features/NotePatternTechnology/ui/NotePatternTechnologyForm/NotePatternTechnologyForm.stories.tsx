import { StoreDecorator, WrapperDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { VStack } from '@ui-kit/Stack'
import {
  type NotePatternTechnologySchema,
} from '../../model/types/NotePatternTechnologySchema'
import { NotePatternTechnologyForm } from './NotePatternTechnologyForm'

const meta: Meta<typeof NotePatternTechnologyForm> = {
  title: 'features/NotePatternTechnologyForm',
  component: NotePatternTechnologyForm,
  tags: ['autodocs'],
}

const values: NotePatternTechnologySchema['values'] = {
  linkTechnology: '',
  linkInstall: '',
  linkDocs: '',
}

export default meta
type Story = StoryObj<typeof NotePatternTechnologyForm>

export const Primary: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternTechnology: {
        values,
        editValues: {
          icon: '',
        },
      },
    }),
  ],
}

export const IsLoading: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternTechnology: {
        values,
        isLoading: true,
        editValues: {
          icon: '',
        },
      },
    }),
  ],
}

export const Validation: Story = {
  decorators: [
    WrapperDecorator<typeof VStack>(VStack, { gap: 12 }),
    StoreDecorator({
      notePatternTechnology: {
        values,
        validation: {
          linkTechnology: 'Валидация',
          linkInstall: 'Валидация',
          linkDocs: 'Валидация',
          icon: 'Валидация',
        },
        editValues: {
          icon: '',
        },
      },
    }),
  ],
}
