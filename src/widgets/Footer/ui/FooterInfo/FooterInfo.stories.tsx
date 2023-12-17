import type { Meta, StoryObj } from '@storybook/react'
import { FooterInfo } from './FooterInfo'

const meta: Meta<typeof FooterInfo> = {
  title: 'widgets/Footer/FooterInfo',
  component: FooterInfo,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FooterInfo>

export const Primary: Story = {}
