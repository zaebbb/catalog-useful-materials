import type { Meta, StoryObj } from '@storybook/react'
import { Span } from '../Span/Span'
import { Text } from './Text'

const defaultContent = 'Hello world'
const spanGradient = (
  <>
    Hello world
    {' '}
    <Span color={'gradient'} variant={'80'} content={'Other text'} />
  </>
)
const spanWarning = (
  <>
    Hello world
    {' '}
    <Span color={'warning'} variant={'80'} content={'Other text'} />
  </>
)
const spanInfo = (
  <>
    Hello world
    {' '}
    <Span color={'info'} variant={'80'} content={'Other text'} />
  </>
)
const spanDanger = (
  <>
    Hello world
    {' '}
    <Span color={'danger'} variant={'80'} content={'Other text'} />
  </>
)

const meta: Meta<typeof Text> = {
  title: 'ui-kit/Text/Text',
  component: Text,
  args: {
    children: defaultContent,
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Text>

export const Primary: Story = {
  args: {
    children: defaultContent,
  },
}

// text-align
export const TextCenter: Story = { args: { align: 'center' } }
export const TextRight: Story = { args: { align: 'right' } }

// text size
export const TextSmall: Story = { args: { type: 'small' } }
export const TextMedium: Story = { args: { type: 'medium' } }
export const TextLarge: Story = { args: { type: 'large' } }

// text and span
export const TextAndSpanGradient: Story = { args: { children: spanGradient } }
export const TextAndSpanWarning: Story = { args: { children: spanWarning } }
export const TextAndSpanInfo: Story = { args: { children: spanInfo } }
export const TextAndSpanDanger: Story = { args: { children: spanDanger } }

// width text
// eslint-disable-next-line max-len
const children = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aliquam animi at commodi consequuntur dolores dolorum, esse et excepturi in magnam molestiae nihil odio quia quidem quo quos recusandae reiciendis saepe, suscipit tempora veniam voluptas voluptates. Maiores non optio, porro quibusdam sed suscipit tempora ut veritatis. Illo quos recusandae sint! Ad asperiores at commodi consectetur consequuntur corporis, debitis delectus dicta dolor dolorem ea earum eius error est eum ex id ipsam iusto libero minima minus mollitia nostrum officia officiis perferendis praesentium quasi quis quisquam quos ratione rem sequi totam vel vero vitae voluptatibus voluptatum. Esse exercitationem fuga quis quos voluptatum.'
export const Text50: Story = { args: { children, width: '50%' } }
export const Text300px: Story = { args: { children, width: '300px' } }
