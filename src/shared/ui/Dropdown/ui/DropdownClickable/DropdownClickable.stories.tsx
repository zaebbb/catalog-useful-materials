import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@ui-kit/Button'
import { IconLib } from '@ui-kit/Icon'
import { DropdownClickable } from './DropdownClickable'

const meta: Meta<typeof DropdownClickable> = {
  title: 'ui-kit/Dropdown/DropdownClickable',
  tags: ['autodocs'],
  component: DropdownClickable,
}

export default meta
type Story = StoryObj<typeof DropdownClickable>

const items = [
  { content: <Button fill={'clear'}>Text 1</Button>, link: '/about' },
  { content: <Button fill={'clear'}>Text 2</Button>, link: '/about1' },
  { content: <Button fill={'clear'}>Text 3</Button>, link: '/about2' },
  { content: <Button fill={'clear'}>Text 4</Button>, link: '/about3' },
]

export const Primary: Story = {
  args: {
    trigger: <Button>Hello world</Button>,
    items,
  },
}

export const PrimaryAndButtonItemWithIconLeft: Story = {
  args: {
    trigger: <Button>Hello world</Button>,
    items: [
      ...items,
      {
        content: (
          <Button addonLeft={(
            <IconLib Icon={'IconFaBeer'} />
          )} fill={'clear'}>Text 5</Button>
        ),
        link: '/about5',
      },
      {
        content: (
          <Button addonLeft={(
            <IconLib Icon={'IconFaBeer'} />
          )} fill={'clear'}>Text 5</Button>
        ),
        link: '/about6',
      },
      {
        content: (
          <Button addonLeft={(
            <IconLib Icon={'IconFaBeer'} />
          )} fill={'clear'}>Text 5</Button>
        ),
        link: '/about7',
      },
    ],
  },
}

export const PrimaryAndButtonItemWithIconRight: Story = {
  args: {
    trigger: <Button>Hello world</Button>,
    items: [
      ...items,
      {
        content: (
          <Button addonRight={(
            <IconLib Icon={'IconFaBeer'} />
          )} fill={'clear'}>Text 5</Button>
        ),
        link: '/about',
      },
    ],
  },
}
