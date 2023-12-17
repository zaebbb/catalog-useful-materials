import type { Meta, StoryObj } from '@storybook/react'
import { FooterBottomContent } from './FooterBottomContent'

const meta: Meta<typeof FooterBottomContent> = {
  title: 'widgets/Footer/FooterBottomContent',
  component: FooterBottomContent,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FooterBottomContent>

export const Primary: Story = {}
