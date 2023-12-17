import type { Meta, StoryObj } from '@storybook/react'
import { SelectFieldRemote } from './SelectFieldRemote'

const meta: Meta<typeof SelectFieldRemote> = {
  title: 'ui-kit/SelectField/SelectFieldRemote',
  component: SelectFieldRemote,
  tags: ['autodocs'],
  args: {
    placeholder: 'Выберите из списка',
    label: 'Деятельность',
  },
}

export default meta
type Story = StoryObj<typeof SelectFieldRemote>

export const Primary: Story = {
  args: {
    remotePath: '/remote-data/test-list',
  },
}
