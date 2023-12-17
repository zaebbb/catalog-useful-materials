import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from './Loader'

const meta: Meta<typeof Loader> = {
  title: 'ui-kit/Loader',
  tags: ['autodocs'],
  component: Loader,
}

export default meta
type Story = StoryObj<typeof Loader>

export const Primary: Story = {}

export const LoaderSize150: Story = { args: { size: 150 } }
export const LoaderSize250: Story = { args: { size: 250 } }
export const LoaderSize500: Story = { args: { size: 500 } }
