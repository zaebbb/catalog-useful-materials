import type { Meta, StoryObj } from '@storybook/react'
import { ProgressBar } from './ProgressBar'

const meta: Meta<typeof ProgressBar> = {
  title: 'ui-kit/ProgressBar',
  component: ProgressBar,
  decorators: [
    (Story) => (
      <div style={{ padding: '50px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ProgressBar>

export const Primary: Story = {}

export const PrimaryCompleteValue: Story = {
  args: {
    value: 0.5,
  },
}

export const PrimaryCompleteAndLoadValue: Story = {
  args: {
    value: 0.5,
    loadProgress: 0.75,
  },
}
