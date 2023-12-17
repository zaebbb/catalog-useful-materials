import type { Meta, StoryObj } from '@storybook/react'
import { IconLib } from '@ui-kit/Icon'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'ui-kit/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Кнопка',
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}

// use addons
export const DefaultWithAddonLeft: Story = {
  args: {
    addonLeft: <IconLib Icon={'IconFaBeer'} />,
  },
}
export const GradientWithAddonLeft: Story = {
  args: {
    theme: 'gradient',
    addonLeft: <IconLib Icon={'IconFaBeer'} />,
  },
}
export const DefaultWithAddonLeftBorder: Story = {
  args: {
    addonLeft: <IconLib Icon={'IconFaBeer'} />,
    fill: 'border',
  },
}
export const GradientWithAddonLeftBorder: Story = {
  args: {
    theme: 'gradient',
    fill: 'border',
    addonLeft: <IconLib Icon={'IconFaBeer'} />,
  },
}

// size
export const Small: Story = { args: { size: 'small' } }
export const Medium: Story = { args: { size: 'medium' } }
export const Large: Story = { args: { size: 'large' } }

// theme
export const ColorDefault: Story = { args: { theme: 'default' } }
export const ColorGradient: Story = { args: { theme: 'gradient' } }

// fill
export const DefaultFull: Story = { args: { fill: 'full' } }
export const DefaultBorder: Story = { args: { fill: 'border' } }
export const DefaultClear: Story = { args: { fill: 'clear' } }

// other
export const GradientFull: Story = { args: { fill: 'full', theme: 'gradient' } }
export const GradientBorder: Story = { args: { fill: 'border', theme: 'gradient' } }
export const GradientClear: Story = { args: { fill: 'clear', theme: 'gradient' } }

// disabled
export const DefaultDisabled: Story = { args: { isDisabled: true, theme: 'default' } }
export const GradientDisabled: Story = { args: { isDisabled: true, theme: 'gradient' } }
