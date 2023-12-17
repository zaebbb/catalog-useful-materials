/* eslint-disable max-len */
import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const neutral = 'neutral'
const purple = 'purple'
const success = 'success'
const info = 'info'
const warning = 'warning'
const danger = 'danger'

const meta: Meta<typeof Badge> = {
  title: 'ui-kit/Badge',
  component: Badge,
  args: {
    children: 'Черновик',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Badge>

// primary
export const Primary: Story = {}

// warning color
export const Warning80: Story = { args: { color: warning, variant: '80' } }
export const Warning80Border: Story = { args: { color: warning, variant: '80', border: 'default' } }
export const Warning70: Story = { args: { color: warning, variant: '70' } }
export const Warning70Border: Story = { args: { color: warning, variant: '70', border: 'default' } }
export const Warning60: Story = { args: { color: warning, variant: '60' } }
export const Warning60Border: Story = { args: { color: warning, variant: '60', border: 'default' } }
export const Warning50: Story = { args: { color: warning, variant: '50' } }
export const Warning50Border: Story = { args: { color: warning, variant: '50', border: 'default' } }
export const Warning40: Story = { args: { color: warning, variant: '40' } }
export const Warning40Border: Story = { args: { color: warning, variant: '40', border: 'default' } }
export const Warning30: Story = { args: { color: warning, variant: '30' } }
export const Warning30Border: Story = { args: { color: warning, variant: '30', border: 'default' } }
export const Warning20: Story = { args: { color: warning, variant: '20' } }
export const Warning20Border: Story = { args: { color: warning, variant: '20', border: 'default' } }
export const Warning10: Story = { args: { color: warning, variant: '10' } }
export const Warning10Border: Story = { args: { color: warning, variant: '10', border: 'default' } }

// neutral color
export const Neutral80: Story = { args: { color: neutral, variant: '80' } }
export const Neutral80Border: Story = { args: { color: neutral, variant: '80', border: 'default' } }
export const Neutral70: Story = { args: { color: neutral, variant: '70' } }
export const Neutral70Border: Story = { args: { color: neutral, variant: '70', border: 'default' } }
export const Neutral60: Story = { args: { color: neutral, variant: '60' } }
export const Neutral60Border: Story = { args: { color: neutral, variant: '60', border: 'default' } }
export const Neutral50: Story = { args: { color: neutral, variant: '50' } }
export const Neutral50Border: Story = { args: { color: neutral, variant: '50', border: 'default' } }
export const Neutral40: Story = { args: { color: neutral, variant: '40' } }
export const Neutral40Border: Story = { args: { color: neutral, variant: '40', border: 'default' } }
export const Neutral30: Story = { args: { color: neutral, variant: '30' } }
export const Neutral30Border: Story = { args: { color: neutral, variant: '30', border: 'default' } }
export const Neutral20: Story = { args: { color: neutral, variant: '20' } }
export const Neutral20Border: Story = { args: { color: neutral, variant: '20', border: 'default' } }
export const Neutral10: Story = { args: { color: neutral, variant: '10' } }
export const Neutral10Border: Story = { args: { color: neutral, variant: '10', border: 'default' } }

// purple color
export const Purple80: Story = { args: { color: purple, variant: '80' } }
export const Purple80Border: Story = { args: { color: purple, variant: '80', border: 'default' } }
export const Purple70: Story = { args: { color: purple, variant: '70' } }
export const Purple70Purple80Border: Story = { args: { color: purple, variant: '70', border: 'default' } }
export const Purple60: Story = { args: { color: purple, variant: '60' } }
export const Purple60Purple80Border: Story = { args: { color: purple, variant: '60', border: 'default' } }
export const Purple50: Story = { args: { color: purple, variant: '50' } }
export const Purple50Purple80Border: Story = { args: { color: purple, variant: '50', border: 'default' } }
export const Purple40: Story = { args: { color: purple, variant: '40' } }
export const Purple40Purple80Border: Story = { args: { color: purple, variant: '40', border: 'default' } }
export const Purple30: Story = { args: { color: purple, variant: '30' } }
export const Purple30Purple80Border: Story = { args: { color: purple, variant: '30', border: 'default' } }
export const Purple20: Story = { args: { color: purple, variant: '20' } }
export const Purple20Purple80Border: Story = { args: { color: purple, variant: '20', border: 'default' } }
export const Purple10: Story = { args: { color: purple, variant: '10' } }
export const Purple10Purple80Border: Story = { args: { color: purple, variant: '10', border: 'default' } }

// success color
export const Success80: Story = { args: { color: success, variant: '80' } }
export const Success80Border: Story = { args: { color: success, variant: '80', border: 'default' } }
export const Success70: Story = { args: { color: success, variant: '70' } }
export const Success70Border: Story = { args: { color: success, variant: '70', border: 'default' } }
export const Success60: Story = { args: { color: success, variant: '60' } }
export const Success60Border: Story = { args: { color: success, variant: '60', border: 'default' } }
export const Success50: Story = { args: { color: success, variant: '50' } }
export const Success50Border: Story = { args: { color: success, variant: '50', border: 'default' } }
export const Success40: Story = { args: { color: success, variant: '40' } }
export const Success40Border: Story = { args: { color: success, variant: '40', border: 'default' } }
export const Success30: Story = { args: { color: success, variant: '30' } }
export const Success30Border: Story = { args: { color: success, variant: '30', border: 'default' } }
export const Success20: Story = { args: { color: success, variant: '20' } }
export const Success20Border: Story = { args: { color: success, variant: '20', border: 'default' } }
export const Success10: Story = { args: { color: success, variant: '10' } }
export const Success10Border: Story = { args: { color: success, variant: '10', border: 'default' } }

// info color
export const Info80: Story = { args: { color: info, variant: '80' } }
export const Info80Border: Story = { args: { color: info, variant: '80', border: 'default' } }
export const Info70: Story = { args: { color: info, variant: '70' } }
export const Info70Border: Story = { args: { color: info, variant: '70', border: 'default' } }
export const Info60: Story = { args: { color: info, variant: '60' } }
export const Info60Border: Story = { args: { color: info, variant: '60', border: 'default' } }
export const Info50: Story = { args: { color: info, variant: '50' } }
export const Info50Border: Story = { args: { color: info, variant: '50', border: 'default' } }
export const Info40: Story = { args: { color: info, variant: '40' } }
export const Info40Border: Story = { args: { color: info, variant: '40', border: 'default' } }
export const Info30: Story = { args: { color: info, variant: '30' } }
export const Info30Border: Story = { args: { color: info, variant: '30', border: 'default' } }
export const Info20: Story = { args: { color: info, variant: '20' } }
export const Info20Border: Story = { args: { color: info, variant: '20', border: 'default' } }
export const Info10: Story = { args: { color: info, variant: '10' } }
export const Info10Border: Story = { args: { color: info, variant: '10', border: 'default' } }

// danger color
export const Danger80: Story = { args: { color: danger, variant: '80' } }
export const Danger80Border: Story = { args: { color: danger, variant: '80', border: 'default' } }
export const Danger70: Story = { args: { color: danger, variant: '70' } }
export const Danger70Border: Story = { args: { color: danger, variant: '70', border: 'default' } }
export const Danger60: Story = { args: { color: danger, variant: '60' } }
export const Danger60Border: Story = { args: { color: danger, variant: '60', border: 'default' } }
export const Danger50: Story = { args: { color: danger, variant: '50' } }
export const Danger50Border: Story = { args: { color: danger, variant: '50', border: 'default' } }
export const Danger40: Story = { args: { color: danger, variant: '40' } }
export const Danger40Border: Story = { args: { color: danger, variant: '40', border: 'default' } }
export const Danger30: Story = { args: { color: danger, variant: '30' } }
export const Danger30Border: Story = { args: { color: danger, variant: '30', border: 'default' } }
export const Danger20: Story = { args: { color: danger, variant: '20' } }
export const Danger20Border: Story = { args: { color: danger, variant: '20', border: 'default' } }
export const Danger10: Story = { args: { color: danger, variant: '10' } }
export const Danger10Border: Story = { args: { color: danger, variant: '10', border: 'default' } }
