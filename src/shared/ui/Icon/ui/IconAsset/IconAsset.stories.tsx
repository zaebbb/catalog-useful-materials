import ArrowBottomListBox from '@assets/icons/ArrowBottomListBox.svg'
import IconLoad from '@assets/icons/IconLoad.svg'
import type { Meta, StoryObj } from '@storybook/react'
import { IconAsset } from './IconAsset'

const meta: Meta<typeof IconAsset> = {
  title: 'ui-kit/icon/IconAsset',
  tags: ['autodocs'],
  component: IconAsset,
}

export default meta
type Story = StoryObj<typeof IconAsset>

export const Primary: Story = {
  args: {
    Icon: ArrowBottomListBox,
  },
}

export const ButtonIcon: Story = {
  args: {
    Icon: ArrowBottomListBox,
    clickable: true,
    onClick: () => { alert('button') },
  },
}

export const ButtonLoad: Story = {
  args: {
    Icon: IconLoad,
    size: '18',
    clickable: true,
    onClick: () => { alert('button') },
  },
}
