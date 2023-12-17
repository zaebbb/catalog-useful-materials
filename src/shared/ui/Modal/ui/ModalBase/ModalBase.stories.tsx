import type { Meta, StoryObj } from '@storybook/react'
import { ModalBase } from './ModalBase'

const meta: Meta<typeof ModalBase> = {
  title: 'CHANGE/ModalBase',
  component: ModalBase,
}

export default meta
type Story = StoryObj<typeof ModalBase>

export const Primary: Story = {}
