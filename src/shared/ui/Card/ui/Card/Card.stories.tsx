/* eslint-disable max-len */
import { StyleDecorator } from '@config/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
  title: 'ui-kit/Card/Card',
  component: Card,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

export const Primary: Story = {
  decorators: [
    StyleDecorator({ padding: '50px' }),
  ],
  args: {
    category: 'Тест',
    createdAt: new Date().toString(),
    viewLink: '/example',
    username: 'тестовый',
    title: 'Тестовая карточка',
    isAccess: true,
    description: 'Краткое описание того что может быть использовано в тексте по нескольку раз так как это необходиммо системой экзестенциально и периодически',
  },
}
