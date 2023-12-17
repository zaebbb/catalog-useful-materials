import type { Meta, StoryObj } from '@storybook/react'
import { CreateNotePatternArticle } from './CreateNotePatternArticle'

const meta: Meta<typeof CreateNotePatternArticle> = {
  title: 'features/CreateNotePatternArticle',
  component: CreateNotePatternArticle,
}

export default meta
type Story = StoryObj<typeof CreateNotePatternArticle>

export const Primary: Story = {}
