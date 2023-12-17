import type { Preview } from '@storybook/react'
import '../../src/app/styles/index.scss'
import {
  RouterDecorator,
} from '../../src/shared/config/storybook/decorators/RouterDecorator/RouterDecorator'
import {
  SuspenseDecorator,
} from '../../src/shared/config/storybook/decorators/SuspenseDecorator/SuspenseDecorator'
import '../../src/shared/config/i18next/init'
import {
  I18nextDecorator,
} from '../../src/shared/config/storybook/decorators/i18nextDecorator/i18nextDecorator'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    RouterDecorator,
    SuspenseDecorator,
    I18nextDecorator,
  ],
}

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'ru', title: 'Русский' },
      ],
      showName: true,
    },
  },
}

export default preview
