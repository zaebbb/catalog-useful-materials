import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@ui-kit/Button'
import { IconLib } from '@ui-kit/Icon'
import { DropdownHovered } from './DropdownHovered'

const meta: Meta<typeof DropdownHovered> = {
  title: 'ui-kit/Dropdown/DropdownHovered',
  tags: ['autodocs'],
  component: DropdownHovered,
}

export default meta
type Story = StoryObj<typeof DropdownHovered>

const items = [
  { content: <Button fill={'clear'}>Text 1</Button>, link: '/about' },
  { content: <Button fill={'clear'}>Text 2</Button>, link: '/about' },
  { content: <Button fill={'clear'}>Text 3</Button>, link: '/about' },
  { content: <Button fill={'clear'}>Text 4</Button>, link: '/about' },
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
        link: '/about',
      },
      {
        content: (
          <Button addonLeft={(
            <IconLib Icon={'IconFaBeer'} />
          )} fill={'clear'}>Text 5</Button>
        ),
        link: '/about',
      },
      {
        content: (
          <Button addonLeft={(
            <IconLib Icon={'IconFaBeer'} />
          )} fill={'clear'}>Text 5</Button>
        ),
        link: '/about',
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
