/* eslint-disable max-len */
import { StyleDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { CardSkeleton } from './Card.skeleton'

const meta: Meta<typeof CardSkeleton> = {
  title: 'ui-kit/Card/CardSkeleton',
  component: CardSkeleton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CardSkeleton>

export const Primary: Story = {
  decorators: [
    StyleDecorator({ padding: '50px' }),
  ],
}
