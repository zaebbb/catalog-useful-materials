import type { Meta, StoryObj } from '@storybook/react'
import { ElementEdit } from './ElementEdit'

const meta: Meta<typeof ElementEdit> = {
  title: 'ui-kit/ElementEdit',
  component: ElementEdit,
}

const fn = () => {}

export default meta
type Story = StoryObj<typeof ElementEdit>

export const Primary: Story = {
  args: { onDelete: fn, linkEdit: '/' },
}
export const PrimaryEdit: Story = {
  args: { linkEdit: '/', onDelete: undefined },
}
export const PrimaryDelete: Story = {
  args: { onDelete: () => {} },
}
export const PrimaryDeleteContent: Story = {
  args: {
    onDelete: () => {},
    deleteContent: 'Текст для удаления',
  },
}
