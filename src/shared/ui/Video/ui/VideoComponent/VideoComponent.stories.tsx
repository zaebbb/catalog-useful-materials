import type { Meta, StoryObj } from '@storybook/react'
import { VideoComponent } from './VideoComponent'

const meta: Meta<typeof VideoComponent> = {
  title: 'ui-kit/VideoComponent',
  component: VideoComponent,
  tags: ['autodocs'],
  args: {
    src: 'https://youtu.be/KyEu5ruJ1sU',
  },
}

export default meta
type Story = StoryObj<typeof VideoComponent>

export const Primary: Story = {}
