import type { Meta, StoryObj } from '@storybook/react'
import { IconLib } from '@ui-kit/Icon'
import { Tab } from './Tab'

const meta: Meta<typeof Tab> = {
  title: 'ui-kit/Tabs/Tab',
  component: Tab,
  args: {
    children: 'Таб',
  },
}

const Icon = (
  <IconLib Icon={'IconFaBeer'} />
)

export default meta
type Story = StoryObj<typeof Tab>

export const Primary: Story = {}
export const TabHovered: Story = { args: { isHovered: true } }
export const TabIcon: Story = { args: { iconLeft: Icon } }
export const TabIconHovered: Story = {
  args: {
    iconLeft: Icon,
    isHovered: true,
  },
}
