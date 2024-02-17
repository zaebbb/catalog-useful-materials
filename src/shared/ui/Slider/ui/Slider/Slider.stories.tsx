import Image1 from '@assets/image/pages/create-note-page.png'
import Image3 from '@assets/image/pages/forbidden-page.png'
import Image2 from '@assets/image/pages/login-page.png'
import Image5 from '@assets/image/pages/profile-page.png'
import Image4 from '@assets/image/pages/register-page.png'
import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './Slider'

const meta: Meta<typeof Slider> = {
  title: 'ui-kit/Slider',
  component: Slider,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Slider>

export const Primary: Story = {
  args: {
    images: [
      Image1,
      Image2,
      Image3,
      Image4,
      Image5,
    ],
  },
}
