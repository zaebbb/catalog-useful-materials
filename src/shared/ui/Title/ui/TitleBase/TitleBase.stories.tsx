import type { Meta, StoryObj } from '@storybook/react'
import { TitleBase } from './TitleBase'

const meta = {
  title: 'ui-kit/Title/TitleBase',
  component: TitleBase,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TitleBase>

const children = 'Заголовок на проекте'

export default meta
type Story = StoryObj<typeof meta>

export const TitleExtra: Story = {
  args: {
    variant: 'extra',
    children,
  },
}

export const TitleLarge: Story = {
  args: {
    variant: 'large',
    children,
  },
}

export const TitleMedium: Story = {
  args: {
    variant: 'medium',
    children,
  },
}

export const TitleMini: Story = {
  args: {
    variant: 'mini',
    children,
  },
}

export const TitleSmall: Story = {
  args: {
    variant: 'small',
    children,
  },
}

export const TitleRegular: Story = {
  args: {
    variant: 'regular',
    children,
  },
}
